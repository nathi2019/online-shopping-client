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
<<<<<<< HEAD
    @Input() isConnected: boolean;
    @Input() cartList: Cart[] = this.sharedService.cartList;
    @Output() search = new EventEmitter();
    categories = this.sharedService.categoryList;


    constructor(private router: Router, private sharedService: SharedService) {
    }
=======
  isConnected: boolean;
  @Input() cartList: Cart[] = this.sharedService.cartList;
  @Output() search = new EventEmitter();
  @Input() categories: string[];


  constructor(private router: Router, private sharedService: SharedService) {
    this.isConnected = this.sharedService.currentUser == null ? false : true;

  }
>>>>>>> 746e302caa1b0566e33a547e58614ae9b28b15ee

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

  onOrderButtonClicked(): void {
    this.router.navigate(['home/orders']);
  }

  onHomeButtonClicked(): void {
    this.router.navigate(['home/']);
  }

  onCartButtonClicked(): void{
    this.router.navigate(['home/cart']);
  }

  onEditProfileButtonClicked(): void {
    if (this.isConnected) {
      this.router.navigate(['home/edit-profile']);
    } else {
      this.router.navigate(['login']);
    }
    onLoginButtonClicked() {
        this.router.navigate(['/login']);
    }

  }

}
