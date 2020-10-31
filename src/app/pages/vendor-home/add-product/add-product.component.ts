import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../services/shared.service';
import {Product, ProductUpload} from '../../../models';
import {ProductService} from '../../../services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  selectedFiles: File [];
  urls: any[];
  categories: string[] = this.sharedService.categoryList;

  constructor(private sharedService: SharedService, private productService: ProductService) {
  }

  ngOnInit(): void {
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

  onSubmit(product: ProductUpload): void {
    product.files = this.selectedFiles;
    this.productService.createProduct(product)
      .subscribe((data) => console.log(data), error => console.log(error.status));

  }
  onReset(): void{
    this.selectedFiles = null;
    this.urls = null;
  }
}
