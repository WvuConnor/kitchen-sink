import { Component } from '@angular/core';
import { mock_list } from './mock_list';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})

export class HomeLayoutComponent {
  products: ProductModel[] = [];

  constructor(){
    for(var product of mock_list){
      console.log(product);
      this.products.push(product);
    }
  }
}
