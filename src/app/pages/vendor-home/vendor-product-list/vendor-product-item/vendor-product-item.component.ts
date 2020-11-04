import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../../models';
import {ProductService} from '../../../../services';
import {SharedService} from '../../../../services/shared.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-vendor-product-item',
  templateUrl: './vendor-product-item.component.html',
  styleUrls: ['./vendor-product-item.component.css']
})
export class VendorProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();
  @Input() categories: string[] ;
  selectedFiles: File [];
  urls: any[];
  fileUpload = new Subject<File>();
  fileSubscriber = this.fileUpload.asObservable().subscribe((file) => this.productService
    .uploadProductFile(file, this.product.id)
    .subscribe(data => console.log(data), error => console.log(error.status)));

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
      quantity: this.product.quantity,
      category: this.product.category,
      vendorId: this.sharedService.vendorId
    };
  }

  convertUrl(value: any): string {
    return 'http://' + value;
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

  uploadFile(file: File): void {
  }

  onSubmit(): void {

    this.productService.updateProduct(this.product)
      .subscribe(
        (res) => {
        }, error => console.log(error.status));
    Array.from(this.selectedFiles)
      .forEach((file) => this.fileUpload.next(file));

    this.urls = null;
  }


  onCancel(): void {
    this.showMode = !this.showMode;
    Object.assign(this.editProduct, this.product);
    this.selectedFiles = null;
    this.urls = null;
  }
}
