import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models/cart.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private userUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }
  getUsers(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.userUrl);

  }
}
