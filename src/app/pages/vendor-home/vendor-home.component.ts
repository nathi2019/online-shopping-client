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

  pendingProducts: Product[];
  approvedProducts: Product[];
  rejectedProducts: Product[];
  active = 'Approved products:';
  rejected = 'Rejected products';
  pending = 'Pending products';

  vendor: Vendor = {
    products: this.sharedService.productList,
    company: {name: 'M&H'}
  };


  constructor(private sharedService: SharedService, private productService: ProductService) {
    this.productService.getPendingProducts()
      .subscribe(products => {
        this.pendingProducts = products;
        console.log(this.pendingProducts);
      }, error => console.log(error));
    this.productService.getRejectedProducts()
      .subscribe(products => {
        this.rejectedProducts = products;
        console.log(this.approvedProducts);
      }, error => console.log(error));
    this.productService.getApprovedProducts()
      .subscribe(products => {
        this.approvedProducts = products;
        console.log(this.approvedProducts);
      }, error => console.log(error));

  }

  ngOnInit(): void {
  }

}

