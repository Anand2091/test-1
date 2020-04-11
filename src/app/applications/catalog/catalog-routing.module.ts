import { Routes } from '@angular/router';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryListComponent } from './category-list/category-list.component';


export const CatalogRoutingModule: Routes = [
  { path: 'categoryadd', component: CategoryAddComponent, data: { title: 'Dashboard' } },
  { path: 'categorylist', component: CategoryListComponent, data: { title: 'Dashboard' } }
];


