import {Component, OnInit} from '@angular/core';
import {Product, Vendor} from '../../models';
import {SharedService} from '../../services/shared.service';
import {ProductService} from '../../services';

@Component({
  selector: 'app-vendor-home',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.css']
})
export class VendorHomeComponent implements OnInit {

  pendingProducts: Product[] = new Array();
  activeProducts: Product[];

  // TODO get Vendor data from backend
  vendor: Vendor = {
    products: this.sharedService.productList,
    company: {name: 'M&H'}
  };
  active = 'Active products:';
  pending = 'pending products';

  constructor(private sharedService: SharedService, private productService: ProductService) {
    this.productService.getPendingProducts()
      .subscribe(products => { this.pendingProducts = products; console.log(this.pendingProducts);
      } , error => console.log(error));
    this.productService.getActiveProducts()
      .subscribe(products => { this.activeProducts = products; console.log(this.activeProducts);
      } , error => console.log(error));
  }

  ngOnInit(): void {
  }

}

