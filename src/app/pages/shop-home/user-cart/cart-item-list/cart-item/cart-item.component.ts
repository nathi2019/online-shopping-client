import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cart} from 'src/app/models';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
    @Input() cartItem: Cart;
    @Output() remove = new EventEmitter();
    range = (start, end) => Array.from({length: (end - start + 1)}, (v, k) => k + start);

  constructor() {
  }

  ngOnInit(): void {
  }

  onRemove(): void {
    this.remove.emit(this.cartItem);
  }

  convertUrl(value: any): string {
    return 'http://' + value;
  }
}
