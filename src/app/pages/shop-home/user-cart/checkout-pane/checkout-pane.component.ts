import {Component, Input, OnInit} from '@angular/core';
import {Cart, CartVendorSale} from 'src/app/models';
import {SharedService} from '../../../../services';

@Component({
  selector: 'app-checkout-pane',
  templateUrl: './checkout-pane.component.html',
  styleUrls: ['./checkout-pane.component.css']
})
export class CheckoutPaneComponent implements OnInit {
  @Input() cartList: Cart[];
  vendorInfo: CartVendorSale[];
  groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue.amountSold
      );
      return result;
    }, {});
  }

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
  }

  calculateTotal(): number {
    return this.cartList
      .map((cart) => cart.product.price * cart.quantity)
      .reduce((a, b) => a + b);
  }

  onCheckout(): void {
    this.vendorInfo = new Array();
    const products = this.cartList
      .map(cart => {
          return {
            vendorId: cart.product.vendorId, amountSold: cart.quantity * cart.product.price
          };
        }
      );
    const vendors = this.groupBy(products, 'vendorId');
    Object.keys(vendors).forEach(
      key => this.vendorInfo.push({vendorId: key, amounSold: vendors[key].reduce((a, b) => a + b)})
    );

  }
}
