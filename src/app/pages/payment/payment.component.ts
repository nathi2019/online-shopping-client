import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreditCardValidatorService } from '../../services/credit-card-validator.service';
import { PaymentService } from '../../services/payment.service';
import { PaymentDetail } from '../../models/payment.model';
import { first } from 'rxjs/operators';
import { EncryptionService } from '../../services/encryption.service'
import { Card } from 'src/app/models/credit-card';




@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  /**
   * accepts the amount to be paid and the description of the payment 
   */
  @Input() amount = 0;
  @Input() description = '';
  /**
   * emits payment status. the calling component can harness this and decide next logic 
   */
  @Output() paymentStatus = new EventEmitter<boolean>();
  cardErrors: any;
  loading: boolean = false;
  failureMessage = '';
  isSubmitted: boolean = false;
  paymentOk: boolean = false;
  cardForm: FormGroup;
  buttonName = 'Pay';
  card: Card;

  constructor(
    private cardValidator: CreditCardValidatorService,
    private formBuidler: FormBuilder,
    private paymentService: PaymentService,
    private encryption: EncryptionService
  ) {
    this.paymentService.getCardInfo$().subscribe(card => {
      this.card = card;
      this.paymentService.placePayments(this.prepareOrder()).subscribe(response => {
        //emmit payment status values 
        console.log(response)
        this.paymentService.emitPaymentStatus(response.status ==='SUCCESS');
        if (response.status === 'SUCCESS') {
          this.paymentOk = true;
        }else if(response.status === 'FAILED'){
          this.failureMessage = response.paymentMessage; 
        }
      })
    })
  }


  ngOnInit() {

  }
  get getCardForm() {
    return this.cardForm.controls;
  }
  /**
   * form controls for validation of a credit card number 
   */
  getCardNumberControl(): AbstractControl | null {
    return this.cardForm && this.cardForm.get('cardNumber');
  }
  prepareOrder(): PaymentDetail {
    let payment = new PaymentDetail();
    payment.amount = this.amount;
    payment.orderDescription = this.description;

    payment.payerCard = this.card;
    payment.recipientAccountNumber = "2970236995"
    return payment;
  }



}
