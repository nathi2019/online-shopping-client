import {Component, OnInit} from '@angular/core';
import {Order} from '../../../models';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-order-cockpit',
  templateUrl: './order-cockpit.component.html',
  styleUrls: ['./order-cockpit.component.css']
})


export class OrderCockpitComponent implements OnInit {
  orders: Order[] ;

  constructor(private orderService: OrderService) {
    this.orderService.getOrders().subscribe((orders) => this.orders = orders,
      error => console.log(error));
    console.log(this.orders);
  }

  ngOnInit(): void {
  }

}
