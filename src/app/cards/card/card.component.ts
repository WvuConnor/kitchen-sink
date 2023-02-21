/*
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() price: number;
  @Input() imgDescription: string;
  @Input() description: string;
  @Input() img: string;

  constructor() {
    this.img ="No img found";
    this.imgDescription = "No description found"
    this.price = 0;
    this.description = "No information found"
   }

  ngOnInit(): void {
  }

}

export const mock_list = [
  {
      img: "https://www.nasa.gov/sites/default/files/thumbnails/image/hubble_donotielloii_potw2306a.jpg",
      description: "yo wuddup",
      price: 99.99,
      imgDescription: "galaxy 2"
  },
  {
      img: "https://www.nasa.gov/sites/default/files/thumbnails/image/hubble_ugc7983_potw2303a.jpg",
      description: "yo wuddup 22",
      price: 998.99,
      imgDescription: "galaxy 3"
  },
  {
      img: "https://www.nasa.gov/sites/default/files/thumbnails/image/hubble_ugc7983_potw2303a.jpg",
      description: "yo wuddup 22",
      price: 998.99,
      imgDescription: "galaxy 3"
  }
];
export class ProductModel {
  price: number;
  imgDescription: string;
  description: string;
  img: string;

  constructor(price: number, imgDescription: string, description: string, img: string){
      this.description =description;
      this.img =img;
      this.imgDescription = imgDescription;
      this.description=description;
      this.price = price;
  }
}
*/