import {Card} from './card.model';
import {Address} from './address.model';

export interface User{

    username: string;
    name: string;
    email: string;
    password: string;
    iamgeUrl: string;
    address: Address;
    card: Card;

}
