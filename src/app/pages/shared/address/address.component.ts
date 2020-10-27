import { Component, OnInit } from '@angular/core';
import {Address} from "../../../models/Address.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models";
import {AuthenticationService} from "../../../services";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  error: any;
  user: User;
  address: Address;
  userDetailsForm: FormGroup;
  hide: true;
  success;

  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    if (this.user == null) {
      this.address = {street: 'street', city: 'city', state: 'state', zipCode: 'zipCode'};
      // this.user = {address: currentAddress};
    }
    this.userDetailsForm = this.formBuilder.group({
      street: [this.address.street, Validators.required],
      city: [this.address.city, Validators.required],
      state: [this.address.state, Validators.required],
      zipCode: [this.address.zipCode, Validators.required]
    });
  }

  onSignUpButtonPressed() {
    this.success = 'Updated Successfully';
  }
}
