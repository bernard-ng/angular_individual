import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddViewRoutingModule } from './add-view-routing.module';
import { AddViewComponent } from './add-view.component';

@NgModule({
  declarations: [AddViewComponent],
  imports: [CommonModule, AddViewRoutingModule],
})
export class AddViewModule {}
