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
  confirmation: any;
  isSubmitted: boolean = false;
  paymentOk: boolean = false;
  cardForm: FormGroup;
  buttonName ='Pay';

  constructor(
    private cardValidator: CreditCardValidatorService,
    private formBuidler: FormBuilder,
    private paymentService: PaymentService,
    private encryption: EncryptionService
  ) { }


  ngOnInit() {
    this.cardForm = this.formBuidler.group({
      cardHolderName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.minLength(12), this.cardValidator.luhnValidator()]],
      cvc: ['', Validators.required],
      expirationDate: ['', Validators.required]
    });
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

  onPayButton() {
    this.isSubmitted = true;
    if (this.cardForm.invalid) return
    this.loading = true;
    this.paymentService.placePayments(this.prepareOrder()).pipe(first())
      .subscribe(response => {
        console.log(response)
        this.paymentOk = response.status === "SUCCESS";
        this.paymentStatus.emit(this.paymentOk);

      })



  }
  prepareOrder(): PaymentDetail {
    let payment = new PaymentDetail();
    let card = new Card();

    payment.amount = this.amount;
    payment.orderDescription = this.description;
    card.cardNumber = this.getCardForm.cardNumber.value;
    card.holderName = this.getCardForm.cardHolderName.value;
    card.ccv = this.getCardForm.cvc.value;
    card.expirationDate = this.getCardForm.expirationDate.value;
    payment.payerCard = card;
    return payment;
  }



}
