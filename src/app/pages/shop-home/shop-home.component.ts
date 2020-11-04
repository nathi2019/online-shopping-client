import {Component, OnInit} from '@angular/core';
import {SharedService} from 'src/app/services/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit {

  constructor(private sharedService: SharedService, public router: Router) {

    this.initCart();

  }

  ngOnInit(): void {
  }


  initCart(): void {
    this.sharedService.cartList = new Array();
  }
}
