import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/models';
import {SharedService} from 'src/app/services/shared.service';
import {ProductService} from '../../../services';

@Component({
  selector: 'app-shop-cockpit',
  templateUrl: './shop-cockpit.component.html',
  styleUrls: ['./shop-cockpit.component.css']
})
export class ShopCockpitComponent implements OnInit {

  products: Product[];

  constructor( private productService: ProductService) {
    this.productService.getAllProducts()
      .subscribe(products => this.products = products , error => console.log(error.status));

  }

  ngOnInit(): void {

  }

}
