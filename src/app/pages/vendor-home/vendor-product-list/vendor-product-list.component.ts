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
  categories: string[];
  constructor(private productService: ProductService) {
    this.productService.getCategories()
      .subscribe(categories => this.categories = categories,
        error => console.log(error));
  }

  ngOnInit(): void {
  }

  onDelete(product: Product): void {
    console.log(this.products);
    this.products.splice(this.products.indexOf(product), 1);
  }
}
