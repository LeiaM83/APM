import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    //listFilter: string = 'kittens';

    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter
    }

    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter:', value);
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];

    products: IProduct[] = [
        {
            "productId" : 2,
            "productName" : "Black Kittens",
            "productCode" : "CAT-0023",
            "releaseDate" : "October 31, 2020",
            "description" : "Fluffy little cute baby kittens",
            "price" : 150.00,
            "starRating" : 5,
            "imageUrl" : "assets/images/kittens.jpg"
        },
        {
            "productId" : 3,
            "productName" : "Whip",
            "productCode" : "CAT-0024",
            "releaseDate" : "October 31, 2019",
            "description" : "Trusty whip for keeping Batman at bay",
            "price" : 75.00,
            "starRating" : 5,
            "imageUrl" : "assets/images/whip.jpg"
        },
        {
            "productId" : 4,
            "productName" : "Cream",
            "productCode" : "CAT-0025",
            "releaseDate" : "December 31, 1999",
            "description" : "Cream to feed your kittens or yourself",
            "price" : 3.00,
            "starRating" : 3,
            "imageUrl" : "assets/images/cream.jpg"
        },
        {
            "productId" : 5,
            "productName" : "Goggles",
            "productCode" : "CAT-0026",
            "releaseDate" : "October 31, 2020",
            "description" : "Goggles",
            "price" : 15.00,
            "starRating" : 4.5,
            "imageUrl" : "assets/images/goggles.jpg"
        },
        {
            "productId" : 6,
            "productName" : "Motorbike",
            "productCode" : "CAT-0027",
            "releaseDate" : "October 31, 2020",
            "description" : "Motorbike",
            "price" : 15000.00,
            "starRating" : 5,
            "imageUrl" : "assets/images/motorbike.jpg"
        },
    ]

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.listFilter ='kittens';
    }
}