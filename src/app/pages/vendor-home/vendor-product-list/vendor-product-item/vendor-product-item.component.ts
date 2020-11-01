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
  selectedFiles: File [];
  urls: any[];


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

  onFileChanged(event): void {
    this.selectedFiles = event.target.files;
    this.urls = new Array(this.selectedFiles.length);
    let i = 0;
    for (; i < this.selectedFiles.length; i++) {
      this.readImageUrl(i);
    }
  }

  readImageUrl(index: number): void {

    const reader = new FileReader();

    reader.onload = (event: any) => {
      this.urls[index] = event.target.result;
    };

    reader.onerror = (event: any) => {
      console.log('File could not be read: ' + this.selectedFiles[index].name);
    };
    reader.readAsDataURL(this.selectedFiles[index]);
  }

  onDelete(product: Product): void {
    this.productService.deleteProduct(product.id)
      .subscribe((data) => {
        this.delete.emit(product);
      }, error => {
        console.log(error.status);
      });
  }

  onSubmit(): void {
    this.showMode = !this.showMode;
    this.productService.updateProduct(this.editProduct)
      .subscribe((data) => {
        Object.assign(this.product, this.editProduct);
      }, error => {
        Object.assign(this.editProduct, this.product);
        console.log(error.status);
      });
    Array.from(this.selectedFiles)
      .forEach(file => this.productService
        .uploadProductFile(file, this.product.id)
        .subscribe(url => {
          console.log(file);
          this.product.imageUrl.push(url);
        }, error => console.log(error.status)));
    this.selectedFiles = null;
    this.urls = null;

  }

  onCancel(): void {
    this.showMode = !this.showMode;
    Object.assign(this.editProduct, this.product);
    this.selectedFiles = null;
    this.urls = null;
  }
}
