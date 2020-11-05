import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../../../models';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
 @Input() order: Order;
  displayedColumns: string[] = ['index', 'name', 'price', 'quantity', 'subtotal'];

  constructor() { }

  ngOnInit(): void {
  }

}
