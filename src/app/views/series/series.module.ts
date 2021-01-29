import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series.component';
import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { CommentsComponent } from './comments/comments.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [SeriesComponent, ShowComponent, AddComponent, EditComponent, CommentsComponent],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    ComponentsModule
  ]
})
export class SeriesModule { }
