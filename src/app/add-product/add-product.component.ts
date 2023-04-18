import { Component , OnInit} from '@angular/core';
import { ProductModel } from '../layouts/home-layout/product.model';
import { SeriviceComponent } from '../a-cards/card/service.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  implements OnInit{

  constructor(private sp: SeriviceComponent){ }

  ngOnInit(): void {
  }

  addProduct(product:ProductModel){
    this.sp.addProduct(product);
  }
}
