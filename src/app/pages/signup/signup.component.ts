import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ROLE } from 'src/app/models/enum.ROLE';
import { AuthenticationService } from 'src/app/services';
import { User } from '../../models/user.model'
import { UserCartComponent } from '../shop-home/user-cart/user-cart.component';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  paymentStatus: boolean = false;
  paymentNotComplete: boolean = false;
  @Output() amount: number;
  @Output() description: string;
  error = "";
  signUpForm: FormGroup;
  signUpAsVendor: boolean = false;
  registrationFee: number = 25;
  registrationDescription: string = 'up front registration payment';
  isSubmitted: boolean = false;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private paymentService: PaymentService
  ) {

    /**
     * if the current user is authenticated, then router back to shop
     */
    if (this.authenticationService.isAuthenticated()) {
      router.navigate(['/']);
    }

    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required],
      bankAccountNumber: ['', Validators.required]
    });

    // subscribe to the payment's module emitted status 
    this.paymentService.getPaymentInfo$().subscribe(status => {
      this.paymentStatus = status;

    })
  }

  ngOnInit(): void { }

  get getSignUpForm() {
    return this.signUpForm.controls;
  }

  signUpAsVendorPaymentComplete(paymentOk: boolean) {
    this.paymentStatus = paymentOk;
  }

  onSignUpButtonPressed() {
    let role: ROLE;
    if (this.signUpAsVendor && !this.paymentStatus) {
      //show message that must pay first
      this.paymentNotComplete = true;
      return;
    } else if (this.signUpAsVendor && this.paymentStatus) {
      //procee registration as vendor 
      role = ROLE.VENDOR;
    } else {
      //proceed normal registration [as user]
      role = ROLE.USER;
    }
    this.isSubmitted = true;
    if (this.signUpForm.invalid) return;
    this.loading = true;
    this.authenticationService.signUp(this.getFormData(ROLE.VENDOR))
      .pipe(first())
      .subscribe(response => {
        if (response.status == 401) {
          this.error = response.message;
        } else {
          // You can also show success messages here {may be use toastr service}
          this.router.navigate(['/login']);
        }

      });

  }
  onSignUpAsVendorChecked(event: any) {
    if (event.checked) {
      this.signUpAsVendor = true;
      this.amount = this.registrationFee;
      this.description = this.registrationDescription;
    }
    else {
      this.signUpAsVendor = false;

    }

  }

  generateSignUpOrderNumber() {
    let orderNumber = 'Sign-up:';
    for (let i = 0; i < 10; i++) {
      let num = Math.random() * Math.floor(10);
      orderNumber += num;
    }
    return orderNumber;
  }

  getFormData(role: ROLE) {
    let newUser = new User();
    newUser.name = this.getSignUpForm.name.value;
    newUser.email = this.getSignUpForm.email.value;
    newUser.password = this.getSignUpForm.password.value;
    newUser.role = role;
  }
}
