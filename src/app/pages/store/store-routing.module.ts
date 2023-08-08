import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
    { path: '', component: StoreComponent, children: [
            { path: 'tshirts', component: CategoryComponent, data: {categoryTitle: 'tshirt'} }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
