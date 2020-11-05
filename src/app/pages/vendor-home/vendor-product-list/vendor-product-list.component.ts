import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models';
import {ProductService} from '../../../services';

@Component({
  selector: 'app-vendor-product-list',
  templateUrl: './vendor-product-list.component.html',
  styleUrls: ['./vendor-product-list.component.css']
})
export class VendorProductListComponent implements OnInit {
  @Input() label: string;
  @Input() products: Product[];
  @Input()categories: string[];
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  onDelete(product: Product): void {
    console.log(this.products);
    this.products.splice(this.products.indexOf(product), 1);
  }
}
