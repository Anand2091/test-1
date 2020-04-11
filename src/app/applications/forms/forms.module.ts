import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsRoutingModule } from './forms-routing.module';
import { FormCreateComponent } from './form-create/form-create.component';


@NgModule({
  declarations: [FormCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(FormsRoutingModule)
  ]
})
export class FormsModule { }
