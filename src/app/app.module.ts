import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AuthComponent } from './views/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddViewComponent } from './views/add-view/add-view.component';
import { EditViewComponent } from './views/edit-view/edit-view.component';
import { SingleViewComponent } from './views/single-view/single-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AuthComponent,
    AddViewComponent,
    EditViewComponent,
    SingleViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
