import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { SeriviceComponent } from './service.component';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})

export class HomeLayoutComponent implements OnInit{
  products: ProductModel[] = [];

  constructor(private serivicecomponent: SeriviceComponent){
  }

  ngOnInit(): void {
    this.serivicecomponent.getProducts().subscribe((data: ProductModel []) => {
      console.log("Fetching products");
      for(var product of data){
        console.log(product);
        this.products.push(product);
      }
    });

    
  }
}
