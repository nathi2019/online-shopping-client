import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../util/response';
import {Observable} from 'rxjs';
import {Product} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl =  environment.API_URL + '/product/';
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get<ApiResponse>(environment.API_URL + '/products');
  }

  getOneProduct(id: string): Observable<any> {
    return this.http.get<ApiResponse>(environment.API_URL + '/products/' + id);
  }
  deleteProduct(id: number): Observable<any>{
    return this.http.delete(this.productUrl + id);
  }
  updateProduct(product: Product): Observable<any>{
    return this.http.put(this.productUrl + product.id, product);
  }


}
