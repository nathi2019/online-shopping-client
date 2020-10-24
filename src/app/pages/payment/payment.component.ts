import { Component, OnInit, ViewChild, ElementRef, Input, ChangeDetectorRef } from '@angular/core';
import { StripeService, StripeCardComponent, StripeElementsService } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() amount: number;
  @Input() description: string;
  cardErrors: any;
  loading: boolean = false;
  confirmation: any;

  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
      
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };
 

  constructor(private stripeServices: StripeService) { }


  ngOnInit(): void {
    

  }

  async handleForm(e) {
    e.preventDefault();
    console.log(this.card)

    // const { source, error } = await this.stripe.createSource(this.card);

    // if (error) {
    //   // Inform the customer that there was an error.
    //   this.cardErrors = error.message;
    // } else {
    //   // Send the token to your server.
    //   this.loading = true;
    //   // const user = await this.auth.getUser();
    //   // const fun = this.functions.httpsCallable('stripeCreateCharge');
    //   // this.confirmation = await fun({ source: source.id, uid: user.uid, amount: this.amount }).toPromise();
    //   this.loading = false;

    // }
  }

}
