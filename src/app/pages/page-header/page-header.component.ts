import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  currentUser = "";


  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onOrderButtonClicked() {
    this.router.navigate(['shop-home/orders']);
  }
  onHomeButtonClicked() {
    this.router.navigate(['shop-home']);
  }
  onCartButtonClicked() {
    this.router.navigate(['shop-home/cart']);
  }
  onEditProfileButtonClicked() {
    this.router.navigate(['shop-home/edit-profile']);
  }
  onPleaseLoginButtonPressed(){
    this.router.navigate(['login']);
  }

}
