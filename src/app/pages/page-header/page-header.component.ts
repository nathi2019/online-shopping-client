import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { Cart } from 'src/app/models';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
    @Input() isConnected: boolean;
    @Input() cartList: Cart[] = this.sharedService.cartList;
    @Output() search = new EventEmitter();
    categories = this.sharedService.categoryList;


    constructor(private router: Router, private sharedService: SharedService) {
    }

    ngOnInit(): void {
    }

    calculateNumItems(): number {

        return (this.cartList.length === 0) ? 0 : this.cartList.map(cart => cart.quantity).reduce((a, b) => {
            return Number(a) + Number(b);
        });
    }

    onSearch(value: any): void {
        this.search.emit(value);
    }

    onOrderButtonClicked() {
        this.router.navigate(['shop-home/orders']);
    }

    onHomeButtonClicked() {
        this.router.navigate(['shop-home']);
    }

    onCartButtonClicked() {
        this.router.navigate(['home/cart']);
    }

    onEditProfileButtonClicked() {
        this.router.navigate(['shop-home/edit-profile']);
    }
    onLoginButtonClicked() {
        this.router.navigate(['/login']);
    }

}
