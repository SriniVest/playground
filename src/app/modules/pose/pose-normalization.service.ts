import {Injectable} from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import * as THREE from 'three';


export interface PlaneNormal {
  center: THREE.Vector3;
  direction: THREE.Vector3;
}

@Injectable({
  providedIn: 'root'
})
export class PoseNormalizationService {
  model?: any;

  normal(vectors: THREE.Vector3[], planeIdx: [number, number, number]): PlaneNormal {
    const triangle = planeIdx.map(i => vectors[i]);

    const center = new THREE.Vector3(
      (triangle[0].x + triangle[1].x + triangle[2].x) / 3,
      (triangle[0].y + triangle[1].y + triangle[2].y) / 3,
      (triangle[0].z + triangle[1].z + triangle[2].z) / 3,
    );

    const plane = new THREE.Plane().setFromCoplanarPoints(triangle[0], triangle[1], triangle[2]);
    const direction = plane.normal;

    return {center, direction};
  }

  angle(n, d): number {
    return (Math.atan2(n, d) * 180 / Math.PI + 360) % 360;
  }

  normalize(vectors: THREE.Vector3[], normal: PlaneNormal, line: [number, number], center: number, flip: boolean = false): tf.Tensor {
    let matrix: tf.Tensor = tf.tensor2d(vectors.map(v => [v.x, v.y, v.z]));


    // 1. Rotate vectors to normal
    const oldXAxis = new THREE.Vector3(1, 0, 0);
    const zAxis = normal.direction.multiplyScalar(-1);
    const yAxis = new THREE.Vector3().crossVectors(oldXAxis, zAxis);
    const xAxis = new THREE.Vector3().crossVectors(zAxis, yAxis);

    const axis = tf.tensor2d([
      [xAxis.x, yAxis.x, zAxis.x],
      [xAxis.y, yAxis.y, zAxis.y],
      [xAxis.z, yAxis.z, zAxis.z],
    ]);

    matrix = matrix.sub(matrix.slice(0, 1));
    matrix = tf.dot(matrix, axis);

    if (flip) {
      // Because of mismatch between training and inference, need to flip X axis for right hand
      matrix = matrix.mul(tf.tensor2d([[-1, 1, 1]]));
    }

    // 2. Rotate hand on the XY plane such that the BASE-M_CMC is on the Y axis
    const p1 = matrix.slice(line[0], 1); // BASE
    const p2 = matrix.slice(line[1], 1); // M_CMC
    const vec = p2.sub(p1).arraySync();
    const angle = 90 + this.angle(vec[0][1], vec[0][0]);
    const sinAngle = Math.sin(angle * Math.PI / 180);
    const cosAngle = Math.cos(angle * Math.PI / 180);
    const rotationMatrix = tf.tensor2d([
      [cosAngle, -sinAngle, 0],
      [sinAngle, cosAngle, 0],
      [0, 0, 1],
    ]);

    matrix = matrix.dot(rotationMatrix);

    // 3. Scale line to be of length 200
    const j1 = matrix.slice(line[0], 1); // BASE
    const j2 = matrix.slice(line[1], 1); // M_CMC
    const len = tf.pow(j2.sub(j1), 2).sum().sqrt();
    const scalingFactor = tf.scalar(200).div(len);
    matrix = matrix.mul(scalingFactor);

    return matrix.sub(matrix.slice(center, 1));
  }
}
