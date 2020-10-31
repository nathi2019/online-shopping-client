import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models';
import {Card} from '../../../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  error: any;
  user: User;
  card: Card;
  userDetailsForm: FormGroup;
  hide = true;
  success;

  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    if (this.user == null) {
      this.card = {cardNo: 'cardNo', expDate: 'expDate', name: 'name', cvv: 'cvv'}
      // this.user = {card};
    }
    this.userDetailsForm = this.formBuilder.group({
      cardNo: [this.card.cardNo, Validators.required],
      expDate: [this.card.expDate, Validators.required],
      name: [this.card.name, Validators.required],
      cvv: [this.card.cvv, Validators.required]
    });
  }

  onSignUpButtonPressed() {
    this.success = 'Updated Successfully';
  }
}
