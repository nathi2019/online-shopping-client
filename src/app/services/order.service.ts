import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Order} from '../models';
import {map} from 'rxjs/operators';
import {SharedService} from './shared.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderUrl = environment.API_URL_ORDER + '/orders';

  constructor(private http: HttpClient, private sharedService: SharedService) { }
  getOrders(): Observable<Order[]> {
    return this.http.get<{orders: Order[]}>(this.orderUrl + '/user/' + this.sharedService.vendorId)
      .pipe(map(response => response.orders));
  }
}
