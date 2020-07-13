import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Language {
  code: string;
  label: string;
}

@Injectable({ providedIn: 'root' })
export class LanguageService {

  protected languages: Language[];

  protected current: Language;

  constructor(
    private readonly translateService: TranslateService
  ) {
    this.languages = [
      {
        code: 'en',
        label: 'En',
      },
      {
        code: 'vi',
        label: 'Vi',
      }
    ];

    this.current = this.languages.find( i => i.code = 'en');
  }

  getAllLanguages(): Language[] {
    return this.languages;
  }

  getCurrentLanguage(): Language {
    return this.current;
  }

  changeLanguage(code): void {
    const language = this.languages.find(i => i.code = code);
    if (!language) {
      throw Error('Cannot change unsupported language');
    }
    this.translateService.use(language.code);
    this.current = language;
    return;
  }

}
