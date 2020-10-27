import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: "";

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService

  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get getLoginForm() {
    return this.loginForm.controls;
  }


  onLoginButtonPressed() {
    this.submitted = true;
    if (this.loginForm.invalid) return;
    this.loading = true;
    this.authenticationService.login(this.getLoginForm.username.value, this.getLoginForm.password.value)
      .pipe(first())
      .subscribe(
        response => {
          const user = new User
          //if you want to display success message, set it her
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          console.log(error);

          this.loading = false;
        }
      );

  }

}
