import { Component, Input,OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { SeriviceComponent } from './service.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  products: ProductModel[] = [];

  @Input() imgDescription: string;
  @Input() description: string;
  @Input() img: string;
  
  constructor(private serivicecomponent: SeriviceComponent){
    this.img ="No img found";
    this.imgDescription = "No description found"
    this.description = "No information found"
  }

  ngOnInit(): void {
    this.serivicecomponent.getProducts().subscribe((data: ProductModel []) => {
    console.log("Fetching products");
    for(var product of data){
    console.log(product);
    this.products.push(product);
    }
  }
);}
}
