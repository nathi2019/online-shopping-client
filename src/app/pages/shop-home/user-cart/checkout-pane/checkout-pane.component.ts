import { Component, OnInit, Input } from '@angular/core';
import { Cart } from 'src/app/models';

@Component({
  selector: 'app-checkout-pane',
  templateUrl: './checkout-pane.component.html',
  styleUrls: ['./checkout-pane.component.css']
})
export class CheckoutPaneComponent implements OnInit {
  @Input() cartList : Cart[];
  constructor() { }

  ngOnInit(): void {
  }

  calculateTotal(): number
  {
  return this.cartList
      .map((cart) => cart.product.price * cart.quantity)
      .reduce((a,b)=> { return a + b ;});
  }
  onCheckout(): void{
    console.log(this.cartList);
  }
}
