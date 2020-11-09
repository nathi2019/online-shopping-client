import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PaymentDetail } from '../models/payment.model';
import { Subject } from 'rxjs';
import { Card } from '../models/credit-card';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private cardInfo: Subject<any> = new Subject<any>();
  private paymentStatus :Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getCardInfo$() {
    return this.cardInfo.asObservable();
  }
  getPaymentInfo$(){
    return this.paymentStatus.asObservable(); 
  }
  emitCurrentCard(card: Card) {
    this.cardInfo.next(card);
  }
  emitPaymentStatus(isComplete: boolean) {
    this.paymentStatus.next(isComplete);
  }

  placePayments(payment: PaymentDetail) {
    console.log("Payment is " + payment)
    return this.http.post<any>(environment.API_URL_PAYMENT_SERVICE + '/payments', payment);
  }

}
