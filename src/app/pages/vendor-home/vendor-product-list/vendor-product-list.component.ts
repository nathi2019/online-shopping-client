import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models';

@Component({
  selector: 'app-vendor-product-list',
  templateUrl: './vendor-product-list.component.html',
  styleUrls: ['./vendor-product-list.component.css']
})
export class VendorProductListComponent implements OnInit {
  @Input() label: string;
  @Input() products: Product[];

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(product: Product): void {
    console.log(this.products);
    this.products.splice(this.products.indexOf(product), 1);
  }
}
