import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../../../../models/product.model'
import {SharedService} from 'src/app/services/shared.service';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
    @Input() product: Product;

    constructor(private sharedService: SharedService) {
    }

    ngOnInit(): void {
    }

    onAdd(): void {
        const index = this.sharedService.cartList.map((cart) => cart.product)
            .indexOf(this.product);
        if(index === -1) this.sharedService.cartList.push({product: this.product,quantity: 1});
        else this.sharedService.cartList[index].quantity++;
        console

    }
}
