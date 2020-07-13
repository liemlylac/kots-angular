import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TitleService {
  private readonly prefix: string;
  constructor(
    private readonly titleService: Title,
    private readonly translateService: TranslateService
  ) {
    this.prefix = 'Kots';
  }

  setTitle(title): void {
    if (title && title.length > 0) {
      title = this.translateService.instant(title);
    }
    this.titleService.setTitle(title ? `${this.prefix} - ${title}` : this.prefix);
  }
}
