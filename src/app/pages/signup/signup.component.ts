import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error = "";
  signUpForm: FormGroup;
  signUpAsVendor: boolean = false;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required]
    });
  }
  onSignUpButtonPressed() {

  }
  onSignUpAsVendorChecked(event: any) {
    if (event.checked) {
      this.signUpAsVendor = true;
    }
    else {
      this.signUpAsVendor = false;

    }

  }
}
