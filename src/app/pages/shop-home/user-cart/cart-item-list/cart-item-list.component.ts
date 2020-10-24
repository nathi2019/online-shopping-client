import {Component, OnInit, Input} from '@angular/core';
import {Cart} from 'src/app/models';

@Component({
    selector: 'app-cart-item-list',
    templateUrl: './cart-item-list.component.html',
    styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent implements OnInit {

    @Input() cartList: Cart[];

    constructor() {
    }

    ngOnInit(): void {
    }

    onRemove(selected: Cart): void {
    this.cartList.splice(this.cartList.indexOf(selected), 1);

    }
}
