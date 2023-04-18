import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { SecondLayoutComponent } from './layouts/second-layout/second-layout.component';
import { ThirdLayoutComponent } from './layouts/third-layout/third-layout.component';
import { FourthLayoutComponent } from './layouts/fourth-layout/fourth-layout.component';
import { FithLayoutComponent } from './layouts/fith-layout/fith-layout.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [   
  {
  path: '',
  component: HomeLayoutComponent
 },
 {
  path: 'Login',
 component: SecondLayoutComponent
  },
  {
    path: 'Signup',
    component: ThirdLayoutComponent
  },
  {
    path: 'Explore',
    component: FourthLayoutComponent
  },
  {
    path: 'Prints',
    component: FithLayoutComponent
  },
  {
    path: 'admin',
    component: AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
