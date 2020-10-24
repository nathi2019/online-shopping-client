import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-shop-cockpit',
  templateUrl: './shop-cockpit.component.html',
  styleUrls: ['./shop-cockpit.component.css']
})
export class ShopCockpitComponent implements OnInit {

  products: Product[] = this.sharedService.productList;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {

  }

}
