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
