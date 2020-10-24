import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../../services/cart.service';
import { DataSource } from '@angular/cdk/collections';
import { Cart } from 'src/app/models';
import { SharedService } from 'src/app/services/shared.service';

@Component({
    selector: 'app-user-cart',
    templateUrl: './user-cart.component.html',
    styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
    @Input() cartList: Cart[] = this.sharedService.cartList;
    dataSource = new CartDataSource(this.cartService);
    displayedColumns = ['name', 'email', 'phone', 'company'];


    constructor(private cartService: CartService, private sharedService: SharedService) {
    }
 

    ngOnInit(): void {
    }

}


  export class CartDataSource extends DataSource<any> {
    constructor(private cartService: CartService) {
        super();

    }

    connect(): Observable<Cart[]> {
        return this.cartService.getUsers();
    }

    disconnect() {

    }
  }
