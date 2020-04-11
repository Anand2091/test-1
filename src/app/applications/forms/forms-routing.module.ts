import { Routes, RouterModule } from '@angular/router';
import { FormCreateComponent } from './form-create/form-create.component';

export const FormsRoutingModule: Routes = [
    { path: '', component: FormCreateComponent, data: { title: 'Dashboard' } }
];

