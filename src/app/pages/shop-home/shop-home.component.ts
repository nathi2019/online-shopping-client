import {Component, OnInit} from '@angular/core';
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
            name: 'Pikeur Omira ',
            price: 38,
            description: 'Parka with Detachable Hood and Detachable Imitation Fur\n',
            imageUrl: 'https://www.amirashop.co.uk/acatalog/Pikeur-19AW-Omira-132150-1-1000.jpg',
            category: 'Coat',
            inStockQuantity: 10
          },
          {
            name: 'Spiza ',
            price: 45,
            description: 'Two Lengths Women Warm Down Winter Coat',
            imageUrl: 'https://fluffkidswear.com/wp-content/uploads/2019/09/model13_czarny_01.jpg',
            category: 'Coat',
            inStockQuantity: 10,

          },
          {
            name: 'Elegant  ',
            price: 150,
            description: 'Women Wool Coat Elegant Warm Long Coat',
            imageUrl: 'https://erhiem.com/wp-content/uploads/2020/03/0-8db9ef-640x640.jpeg',
            category: 'Coat',
            inStockQuantity: 10
          },
          {
            name: 'Johnson Leather',
            price: 170,
            description: 'Men Black Johnson Leather Jacket',
            imageUrl: 'https://www.thegenuineleather.com/wp-content/uploads/2019/08/Black-leather-jacket-for-men-1.jpg',
            category: 'Jacket',
            inStockQuantity: 10

          },
          {
            name: 'CirrusLite',
            price: 195,
            description: 'his down jacket is a consummate traveler',
            imageUrl: 'https://eddiebauer.scene7.com/is/image/EddieBauer/D0010032_100C1?$328V1$',
            category: 'Jacket',
            inStockQuantity: 10
          }
        ];
    }

    initCart(): void {
    this.sharedService.cartList = new Array();
    }
}
