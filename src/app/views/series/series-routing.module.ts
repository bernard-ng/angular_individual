import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CommentsComponent } from './comments/comments.component';
import { EditComponent } from './edit/edit.component';
import { SeriesComponent } from './series.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {
    path: '', // /series
    component: SeriesComponent,
    pathMatch: 'full'
  },
  {
    path: 'add', // series/add
    component: AddComponent,
    pathMatch: 'full'
  },
  {
    path: ':id', // series/9
    component: ShowComponent,
  },
  {
    path: 'edit/:id', // series/edit/9
    component: EditComponent,
    pathMatch: 'full'
  },
  {
    path: 'comments/:id', // series/comments/9
    component: CommentsComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
