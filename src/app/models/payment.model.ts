import { Card } from '../models/credit-card';

export class PaymentDetail {
    orderNumber: string;
    orderDescription: string;
    recipientAccountNumber: string;
    payerCard: Card
    amount: number


}