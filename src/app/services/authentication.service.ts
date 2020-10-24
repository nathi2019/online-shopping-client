import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models';
import { ApiResponse } from '../util/response';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
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
    return this.currentUser != null;
  }


  login(username: string, password: string) {
    return this.http.post<ApiResponse>(environment.API_URL + "api/auth/login", { username, password })
      .pipe(map(response => {
        //login is succesfull if there is a jwt token 
        if (response && response.result.access_token) {
          localStorage.setItem('currentUser ', JSON.stringify(response.result));
          this.currentUser = response.result;
        }
        return this.currentUser;
      }));
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }


}
