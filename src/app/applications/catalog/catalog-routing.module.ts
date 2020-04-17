import { Routes } from '@angular/router';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';


export const CatalogRoutingModule: Routes = [
  { path: 'categoryadd', component: CategoryAddComponent, data: { title: 'Category Add' } },
  { path: 'categorylist', component: CategoryListComponent, data: { title: 'Category List' } },
  { path: 'categoryedit/:id', component: CategoryEditComponent, data: { title: 'Category Edit' } }
];


