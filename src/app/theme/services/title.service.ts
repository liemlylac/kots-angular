import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TitleService {
  constructor(
    private readonly titleService: Title,
  ) {
  }

  setTitle(title): void {
    this.titleService.setTitle(`Kots - ${title}`);
  }
}
