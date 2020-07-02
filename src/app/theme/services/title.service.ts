import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TitleService {
  private readonly prefix: string;
  constructor(
    private readonly titleService: Title,
  ) {
    this.prefix = 'Kots';
  }

  setTitle(title): void {
    this.titleService.setTitle(title ? `${this.prefix} - ${title}` : this.prefix);
  }
}
