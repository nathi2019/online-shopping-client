import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services';
import {User} from '../../models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ROLE } from 'src/app/models/enum.ROLE';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  error: any;
  signUpAsVendor: any;
  user: User;
  userDetailsForm: FormGroup;
  hide = true;
  success: any;

  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.success = '';
    this.user = this.authService.getCurrentUser();
    if (this.user == null) {
      this.user = {name: 'Abu Hassan', username: 'AbuHassan', email: 'AbuHassan@gmail.com', password: 'AbuHassan01@', imageUrl: '', role :ROLE.ADMIN};
    }
    this.userDetailsForm = this.formBuilder.group({
      username: [{value: this.user.username, disabled: true}, Validators.required],
      name: [this.user.name, Validators.required],
      email: [this.user.email, Validators.required],
      password: [this.user.password, Validators.required]
    });
  }

  updateUserDetails() {
    this.success = 'Updated Successfully';
  }
}
