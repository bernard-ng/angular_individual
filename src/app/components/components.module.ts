import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    FooterComponent,
    SidebarComponent
  ]
})
export class ComponentsModule {
}
