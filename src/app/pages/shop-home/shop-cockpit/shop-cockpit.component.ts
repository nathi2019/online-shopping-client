import {Component, OnInit,} from '@angular/core';
import {Product} from 'src/app/models';
import {ProductService} from '../../../services';

@Component({
  selector: 'app-shop-cockpit',
  templateUrl: './shop-cockpit.component.html',
  styleUrls: ['./shop-cockpit.component.css']
})

export class ShopCockpitComponent implements OnInit {
  products: Product[];
  categories: string[];
  constructor(private productService: ProductService) {
    this.productService.getAllProducts()
      .subscribe(products => this.products = products, error => console.log(error.status));
    this.productService.getCategories()
      .subscribe(categories => this.categories = categories,
        error => console.log(error));
  }

  ngOnInit(): void {

  }

  onSearchHeaderClicked(searchForm: any): void {
    if (searchForm.category === '' && searchForm.keyword === '') {
      this.productService.getAllProducts()
        .subscribe(products => this.products = products, error => console.log(error.status));

    } else {
      this.productService.searchProduct(searchForm.keyword, searchForm.category)
        .subscribe((products) => this.products = products, error => console.log(error.status));
    }

  }

}
