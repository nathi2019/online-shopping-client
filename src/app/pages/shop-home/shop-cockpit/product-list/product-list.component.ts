import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../../../models/product.model';
import {ProductService} from '../../../../services';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    @Input() products: Product[] ;

    constructor() {
    }

    ngOnInit(): void {

    }

}
