import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { SecondLayoutComponent } from './layouts/second-layout/second-layout.component';

const routes: Routes = [   
  {
  path: '',
  component: HomeLayoutComponent
 },
 {
  path: 'SecondLayout',
 component: SecondLayoutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
