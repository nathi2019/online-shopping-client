import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../util/response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<ApiResponse>(environment.API_URL + '/products');
  }

  getOneProduct(id: string) {
    return this.http.get<ApiResponse>(environment.API_URL + '/products/' + id);
  }



}
