import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthenticationService } from '../../../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models';
import { Card } from '../../../models';
import { CreditCardValidatorService } from 'src/app/services/credit-card-validator.service';
import { AbstractControl } from '@angular/forms';
import { PaymentService } from '../../../services/payment.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  error: any;
  user: User;
  card: Card;
  userDetailsForm: FormGroup;
  hide = true;
  success;
  @Output() cardInfo = new EventEmitter<Card>();
  @Input() buttonName = 'Update';

  constructor(private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private cardValidator: CreditCardValidatorService,
    private cardService: PaymentService) {
    //subscribe to the payment status to wether to show or hide

    this.cardService.getPaymentInfo$().subscribe(val => {
      if (val) {
        this.userDetailsForm.disable();
      }
    })
  }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    if (this.user == null) {
      this.card = { cardNumber: '', expirationDate: '', holderName: '', ccv: '' }
      // this.user = {card};
    }
    this.userDetailsForm = this.formBuilder.group({
      cardNo: [this.card.cardNumber, [Validators.required, Validators.minLength(12), this.cardValidator.luhnValidator()]],
      expDate: [this.card.expirationDate, Validators.required],
      name: [this.card.holderName, Validators.required],
      cvv: [this.card.ccv, Validators.required]
    });
  }
  getCardNumberControl(): AbstractControl | null {
    return this.userDetailsForm && this.userDetailsForm.get('cardNo');
  }

  get getCardDetails() {

    return this.userDetailsForm.controls;
  }

  onSubmitButtonPressed() {
    if (this.userDetailsForm.invalid) return;
    this.card.cardNumber = this.getCardDetails.cardNo.value;
    this.card.holderName = this.getCardDetails.name.value;
    this.card.expirationDate = this.getCardDetails.expDate.value;
    this.card.ccv = this.getCardDetails.cvv.value;
    console.log(this.card);
    this.cardService.emitCurrentCard(this.card)
    // this.success = 'Updated Successfully';
  }
}
