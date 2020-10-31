import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../../models';
import {ProductService} from '../../../../services';
import {SharedService} from '../../../../services/shared.service';


@Component({
  selector: 'app-vendor-product-item',
  templateUrl: './vendor-product-item.component.html',
  styleUrls: ['./vendor-product-item.component.css']
})
export class VendorProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();
  categories: string[] = this.sharedService.categoryList;

  editProduct: Product;

  showMode = true;

  constructor(private productService: ProductService, private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.editProduct = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      description: this.product.description,
      imageUrl: this.product.imageUrl,
      inStockQuantity: this.product.inStockQuantity,
      category: this.product.category,
    };
  }


  onDelete(product: Product): void {
    this.productService.deleteProduct(product.id)
      .subscribe((data) => {
        this.delete.emit(product);
      }, error => {
        console.log(error.status);
      });
  }

  onEdit(product: Product): void {
  }

  onSubmit(): void {
    this.productService.updateProduct(this.editProduct)
      .subscribe((data) => {
        Object.assign(this.product, this.editProduct);
      }, error => {
        Object.assign(this.editProduct, this.product);
        console.log(error.status);
      });
    this.showMode = !this.showMode;
  }

  onCancel(): void {
    this.showMode = !this.showMode;
    Object.assign(this.editProduct, this.product);
  }
}
