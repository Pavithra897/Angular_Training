import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { LazyDemoComponent } from '../lazy-demo/lazy-demo.component';
const routes: Routes = [  
  { path: '', component: LazyDemoComponent }  
 ];   

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LazyLoadingRoutingModule
  ],
  exports: [RouterModule]  
})
export class LazyLoadingModule { }


