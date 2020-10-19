import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/index';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().pipe(first())
      .subscribe(response => {
        if (response.status == 500) {
          console.log(response.message);
        } else {
          this.products = response.result;
        }
      })

  }

}
