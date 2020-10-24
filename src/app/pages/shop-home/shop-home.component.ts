import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from 'src/app/models';
import {SharedService} from 'src/app/services/shared.service';

@Component({
    selector: 'app-shop-home',
    templateUrl: './shop-home.component.html',
    styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit {

    constructor(private sharedService: SharedService) {
        this.initProducts();
        this.initCart()
        this.sharedService.initFilters();
    }

    ngOnInit(): void {
    }

    onSearchHeaderClicked(searchValue: string) {
        console.log(searchValue);
    }

    initProducts(): void {
        this.sharedService.productList = [
            {
                name: 'Mac Pro ',
                price: 33.15,
                description: 'new Computer made by apple',
                imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=892&hei=820&&qlt=80&.v=1572825197207',
                inStockQuantity: 10
            },
            {
                name: 'Mac Pro ',
                price: 33.15,
                description: 'new Computer made by apple',
                imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=892&hei=820&&qlt=80&.v=1572825197207',
                inStockQuantity: 10
            },
            {
                name: 'Mac Pro ',
                price: 150.15,
                description: 'new Computer made by apple',
                imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=892&hei=820&&qlt=80&.v=1572825197207',
                inStockQuantity: 10
            },
            {
                name: 'Mac Pro ',
                price: 33.15,
                description: 'new Computer made by apple',
                imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=892&hei=820&&qlt=80&.v=1572825197207',
                inStockQuantity: 10

            },
            {
                name: 'Mac Pro ',
                price: 33.15,
                description: 'new Computer made by apple',
                imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=892&hei=820&&qlt=80&.v=1572825197207',
                inStockQuantity: 10
            }
        ];
    }

    initCart(): void {
    this.sharedService.cartList = new Array();
    }
}
