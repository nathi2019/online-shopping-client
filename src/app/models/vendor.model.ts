import {Product} from './product.model';
import {User} from './user.model';

export interface Vendor{
  company: User;
  products: Product[];
}
