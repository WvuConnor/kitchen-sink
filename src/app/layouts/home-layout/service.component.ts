import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "./product.model";

@Injectable(
    {providedIn: 'root'}
)

export class SeriviceComponent{
    private baseUrl:string = "https://flickr-app-30c57-default-rtdb.firebaseio.com/";
    private productsEndpoint: string = "products.json";

    constructor(private http:HttpClient){

    }

    getProducts(){
        return this.http.get<ProductModel []>(this.baseUrl + this.productsEndpoint);
    }
    getProduct(index:number){
        return this.http.get<ProductModel []>(this.baseUrl + 'products' + '/' + index + '.json');
    }
}
// can be used in other places 
//this is only pulling from database and not pushing anything to the database
//can also send data to the database