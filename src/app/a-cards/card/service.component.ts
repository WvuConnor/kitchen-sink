import { Injectable } from "@angular/core";
import { ProductModel } from "./product.model";
import{ AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)

export class SeriviceComponent{
    // private baseUrl:string = "https://flickr-app-30c57-default-rtdb.firebaseio.com/";
    // private productsEndpoint: string = "Products.json";

    constructor(private db: AngularFireDatabase){

    }

    getProducts(){
        console.log(this.db.list<ProductModel>("Products").valueChanges());
        return this.db.list<ProductModel>("Products").valueChanges();
        
    }
    addProduct(product: ProductModel){
        this.db.list<ProductModel>("Products").push(product);
    }
}
// can be used in other places 
//this is only pulling from database and not pushing anything to the database
//can also send data to the database