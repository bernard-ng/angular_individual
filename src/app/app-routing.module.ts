import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './views/auth/auth.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  {
    path: 'series',
    loadChildren: () => import('./views/series/series.module').then(m => m.SeriesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: AuthComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
