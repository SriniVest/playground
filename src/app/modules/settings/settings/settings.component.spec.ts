import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SettingsComponent} from './settings.component';
import {NgxsModule, Store} from '@ngxs/store';
import {SettingsState} from '../settings.state';
import {FormsModule} from '@angular/forms';
import {ngxsConfig} from '../../../core/modules/ngxs/ngxs.module';
import {AppTranslocoModule} from '../../../core/modules/transloco/transloco.module';

describe('SettingsComponent', () => {
  let store: Store;
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      imports: [
        NgxsModule.forRoot([SettingsState], ngxsConfig),
        FormsModule,
        AppTranslocoModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('applySetting should change the setting in the state', () => {
    store.reset({settings: {drawVideo: false}});

    component.applySetting('drawVideo', true);

    const snapshot = store.snapshot();
    expect(snapshot.settings.drawVideo).toBeTrue();
  });

  it('empty onSettingsChange should set all settings to false', () => {
    component.availableSettings = ['drawVideo', 'drawSignWriting', 'drawPose'];
    store.reset({settings: {drawVideo: true, drawSignWriting: true, drawPose: true}});

    const spy = spyOn(component, 'applySetting');

    component.onSettingsChange([]);

    expect(spy.calls.argsFor(0)).toEqual(['drawVideo', false]);
    expect(spy.calls.argsFor(1)).toEqual(['drawSignWriting', false]);
    expect(spy.calls.argsFor(2)).toEqual(['drawPose', false]);
  });

  it('onSettingsChange should only set selected settings', () => {
    component.availableSettings = ['drawVideo', 'drawSignWriting', 'drawPose'];
    store.reset({settings: {drawVideo: false, drawSignWriting: false, drawPose: false}});

    const spy = spyOn(component, 'applySetting');

    component.onSettingsChange(['drawVideo']);

    expect(spy.calls.argsFor(0)).toEqual(['drawVideo', true]);
  });
});
