import {Product} from './product.model';
import {User} from './user.model';

export interface Vendor{
  company: {name: string};
  products: Product[];
}
