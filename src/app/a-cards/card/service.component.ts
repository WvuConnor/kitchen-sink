import { Injectable } from "@angular/core";
import { ProductModel } from "./product.model";
import{ AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)

export class SeriviceComponent{
    private baseUrl:string = "https://flickr-app-30c57-default-rtdb.firebaseio.com/";
    private productsEndpoint: string = "products.json";

    constructor(private db: AngularFireDatabase){

    }

    getProducts(){
        return this.db.list<ProductModel>("products").valueChanges();
    }
    getProduct(index:number){
        
    }
    addProduct(product: ProductModel){
        this.db.list<ProductModel>("products").push(product);
    }
}
// can be used in other places 
//this is only pulling from database and not pushing anything to the database
//can also send data to the database