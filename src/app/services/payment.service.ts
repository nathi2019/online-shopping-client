import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PaymentDetail } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  placePayments(payment: PaymentDetail) {
    return this.http.post<any>(environment.API_URL_PAYMENT_SERVICE+'/payments/', payment);
  }

}
