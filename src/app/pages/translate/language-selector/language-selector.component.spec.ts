import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LanguageSelectorComponent} from './language-selector.component';
import {AppTranslocoModule} from '../../../core/modules/transloco/transloco.module';
import {AppAngularMaterialModule} from '../../../core/modules/angular-material/angular-material.module';

describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguageSelectorComponent],
      imports: [
        AppTranslocoModule,
        AppAngularMaterialModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
    component.translationKey = 'translate.languages.spoken';
    component.languages = ['en', 'fr', 'de', 'he', 'ar'];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('select the same language should do nothing', () => {
    const {language, topLanguages} = component;

    component.selectLanguageIndex(component.selectedIndex);

    expect(component.language).toEqual(language);
    expect(component.topLanguages).toEqual(topLanguages);
  });

  it('selecting language detection should set index to 0', () => {
    component.hasLanguageDetection = true;
    component.language = 'unk';

    component.selectLanguage(null);

    expect(component.selectedIndex).toEqual(0);
  });

  it('selecting first language without detection should be index 0', () => {
    component.hasLanguageDetection = false;
    component.language = 'unk';

    component.selectLanguage(component.topLanguages[0]);

    expect(component.selectedIndex).toEqual(0);
  });

  it('selecting first language with detection should be index 1', () => {
    component.hasLanguageDetection = true;
    component.language = 'unk';

    component.selectLanguage(component.topLanguages[0]);

    expect(component.selectedIndex).toEqual(1);
  });

  it('selecting unknown language should be first in top', () => {
    component.hasLanguageDetection = false;
    const topLanguagesCount = component.topLanguages.length;

    component.selectLanguage('unk');

    expect(component.language).toEqual('unk');
    expect(component.topLanguages[0]).toEqual('unk');
    expect(component.selectedIndex).toEqual(0);
    expect(component.topLanguages.length).toEqual(topLanguagesCount);
  });

  it('selecting language index 0 with detection should be null', () => {
    component.hasLanguageDetection = true;
    const spy = spyOn(component, 'selectLanguage');

    component.selectLanguageIndex(0);

    expect(spy).toHaveBeenCalledOnceWith(null);
  });

  it('selecting language index 0 without detection should be first language', () => {
    component.hasLanguageDetection = false;
    const spy = spyOn(component, 'selectLanguage');
    const topLanguage = component.topLanguages[0];

    component.selectLanguageIndex(0);

    expect(spy).toHaveBeenCalledOnceWith(topLanguage);
  });

  it('selecting language index 1 with detection should be first language', () => {
    component.hasLanguageDetection = true;
    const spy = spyOn(component, 'selectLanguage');
    const topLanguage = component.topLanguages[0];

    component.selectLanguageIndex(1);

    expect(spy).toHaveBeenCalledOnceWith(topLanguage);
  });
});
