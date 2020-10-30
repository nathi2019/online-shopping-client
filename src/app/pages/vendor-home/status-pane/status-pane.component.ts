import {Component, Input, OnInit} from '@angular/core';
import {Product, Vendor} from '../../../models';

@Component({
  selector: 'app-status-pane',
  templateUrl: './status-pane.component.html',
  styleUrls: ['./status-pane.component.css']
})
export class StatusPaneComponent implements OnInit {
  @Input() vendor: Vendor;
  newProduct: Product =  {
    id: 5,
    name: 'CirrusLite',
    price: 195,
    description: 'his down jacket is a consummate traveler',
    imageUrl: ['https://eddiebauer.scene7.com/is/image/EddieBauer/D0010032_100C1?$328V1$',
      'https://erhiem.com/wp-content/uploads/2020/03/0-8db9ef-640x640.jpeg',
      'https://www.thegenuineleather.com/wp-content/uploads/2019/08/Black-leather-jacket-for-men-1.jpg',
      'https://eddiebauer.scene7.com/is/image/EddieBauer/D0010032_100C1?$328V1$'],
    category: 'Jacket',
    inStockQuantity: 10
  };
  constructor() { }

  ngOnInit(): void {
  }

}
