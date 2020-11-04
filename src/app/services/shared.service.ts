import {Injectable} from '@angular/core';
import {Cart, CartVendorSale, Product, User} from '../models';

@Injectable()
export class SharedService {

  constructor() {
  }

  currentUser: User;
  vendorId = 4;
  productList: Product[];
  cartList: Cart[];
  vendorInfo: CartVendorSale[] = new Array();
  categoryList: string[];

  selectedCategories: string[];
  selectedCategoryList: { category: string, checked: boolean }[];
  price: { minPrice: number, maxPrice: number } = {minPrice: 0, maxPrice: 2000};
}
