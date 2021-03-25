import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'inventories', component: InventoryComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'data-table', component: DataTableComponent}
  
]

// {
//   [ {path: 'dashboard', component: DashboardComponent} 
   
//   ];
   
  
@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
