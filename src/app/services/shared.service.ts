import {Injectable} from '@angular/core';
import {Product, Cart} from '../models';

@Injectable()
export class SharedService {
    productList: Product[];
    cartList: Cart[];
    selectedCategories: string[];
    selectedCategoryList: { category: string, checked: boolean }[];
    categoryList: string[] = ['elecronic', 'laptop', 'health', 'sport',
        'elecronic1', 'laptop1', 'health1', 'sport1'];

    price: {minPrice: number, maxPrice:number} =  {minPrice: 0, maxPrice:2000};
    initFilters(): void {
        this.selectedCategoryList = this.categoryList.map((category) => {
            return {category: category, checked: false};
        });
        this.selectedCategories = new Array();
        this.price.minPrice = 0;
        this.price.maxPrice = 2000;
    }

    resetFilters(): void {
        this.selectedCategoryList.forEach((categoryItem) => categoryItem.checked = false);
        this.selectedCategories.splice(0, this.selectedCategories.length);
        this.price.minPrice = 0;
        this.price.maxPrice = 2000;


    }
}
