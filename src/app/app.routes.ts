import { Routes } from '@angular/router';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListComponent } from './item-list/item-list.component';

export const routes: Routes = [
    { path: 'all-items', component:ItemListComponent },
    { path: 'important', component: ItemListComponent, data: { status: 'important' } },
    { path: 'completed', component: ItemListComponent, data: { status: 'completed' } },
    { path: 'add-item', component: ItemFormComponent },
    { path: 'edit-item/:id', component: ItemFormComponent },
    { path: '', redirectTo: '/all-items', pathMatch: 'full' },
];
