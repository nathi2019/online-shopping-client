import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { ProductService } from '../../../../services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[] = [
        {
            name: 'Mac Pro ',
            price: 33.15,
            description: 'new Computer made by apple',
            imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=892&hei=820&&qlt=80&.v=1572825197207'

        },
        {
            name: 'Mac Pro ',
            price: 33.15,
            description: 'new Computer made by apple',
            imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=892&hei=820&&qlt=80&.v=1572825197207'

        },
        {
            name: 'Mac Pro ',
            price: 33.15,
            description: 'new Computer made by apple',
            imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=892&hei=820&&qlt=80&.v=1572825197207'

        },
        {
            name: 'Mac Pro ',
            price: 33.15,
            description: 'new Computer made by apple',
            imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=892&hei=820&&qlt=80&.v=1572825197207'

        },
        {
            name: 'Mac Pro ',
            price: 33.15,
            description: 'new Computer made by apple',
            imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=892&hei=820&&qlt=80&.v=1572825197207'

        }
    ];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().pipe(first())
      .subscribe(response => {
        if (response.status == 500) {
          console.log(response.message);
        } else {
          this.products = response.result;
        }
      })

  }

}
