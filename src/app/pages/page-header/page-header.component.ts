import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from 'src/app/services/shared.service';
import {Cart} from 'src/app/models';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
    @Input() isConnected: boolean;
    @Input() cartList: Cart[] = this.sharedService.cartList;
    @Output() search = new EventEmitter();

    constructor(private router: Router, private sharedService: SharedService) {
    }

    ngOnInit(): void {
    }

    calculateNumItems(): number {

        return (this.cartList.length === 0) ? 0 : this.cartList.map(cart => cart.quantity).reduce((a, b) => {
            return a + b;
        })
    }

    onSearch(value: any): void {
        this.search.emit(value.searchValue);
    }

    onOrderButtonClicked() {
        this.router.navigate(['shop-home/orders']);
    }

    onHomeButtonClicked() {
        this.router.navigate(['shop-home']);
    }

    onCartButtonClicked() {
        this.router.navigate(['shop-home/cart']);
    }

    onEditProfileButtonClicked() {
        this.router.navigate(['shop-home/edit-profile']);
    }
@Input() isConnected: boolean;
@Input() cartList: Cart[] = this.sharedService.cartList;
@Output() search = new EventEmitter();

constructor(private router: Router, private sharedService: SharedService) {
}

ngOnInit(): void {
}

calculateNumItems(): number {

    return (this.cartList.length === 0) ? 0 : this.cartList.map(cart => cart.quantity).reduce((a, b) => {
        return a + b;
    })
}

onSearch(value: any): void {
    this.search.emit(value.searchValue);
}

onOrderButtonClicked() {
  this.router.navigate(['shop-home/orders']);
}

onHomeButtonClicked() {
  this.router.navigate(['shop-home']);
}

onCartButtonClicked() {
  this.router.navigate(['shop-home/cart']);
}

onEditProfileButtonClicked() {
  this.router.navigate(['shop-home/edit-profile']);
}

}