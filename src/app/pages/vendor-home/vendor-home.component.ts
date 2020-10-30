import { Component, OnInit } from '@angular/core';
import {Vendor} from '../../models';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-vendor-home',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.css']
})
export class VendorHomeComponent implements OnInit {
  // TODO get Vendor data from backend
  vendor: Vendor = {
    products: this.sharedService.productList,
    company: {name: 'M&H'}
  };
  active = 'Active products:';
  pending = 'pending products';

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

}
