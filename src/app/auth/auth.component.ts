import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
   selector: "Flickr-auth",
   templateUrl: "auth.component.html" 
})

export class AuthComponent{
//authForm: any;
    public onSubmit(data: NgForm){
        console.log("Button clicked");
        console.log(data);
    }
}