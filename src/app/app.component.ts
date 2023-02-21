import { Component } from '@angular/core';
import { mock_list } from './a-cards/card/mock_list';
import { ProductModel } from './a-cards/card/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flickr';
  products: ProductModel[] = [];

  constructor(){
    for(var product in mock_list){
      //console.log(product);
      //this.products.push(product);
    }
    //code to fetch code from backend using http
  }
}
