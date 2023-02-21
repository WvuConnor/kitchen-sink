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
