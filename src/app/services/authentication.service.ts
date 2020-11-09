import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { User } from '../models';
import { ApiResponse } from '../util/response';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUser: User;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  public getCurrentUser() {
    return this.currentUser;
  }
  isAuthenticated() {
    return (this.currentUser != null);
  }


  login(username: string, password: string) {
    console.log(username)
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type','password');
const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic username:mobile,password:pin')
      
    return this.http.post<ApiResponse>(environment.API_URL_OAUTH_SERVICE + "/oauth/token",body.toString(), {headers})
      .pipe(map(response => {
        //login is succesfull if there is a jwt token
        if (response && response.result.access_token) {
          localStorage.setItem('currentUser', JSON.stringify(response.result));
          this.currentUser = response.result;
        }
        return this.currentUser;
      }));
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }

  signUp(user) {
    return this.http.post<ApiResponse>(environment.API_URL + "/signup", user);
  }


}
