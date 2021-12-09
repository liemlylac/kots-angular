import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  imports: [CommonModule, MaterialModule, SharedModule, PageRoutingModule],
  declarations: [PageComponent, NotFoundComponent, ForbiddenComponent]
})
export class PageModule {}
