import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ApiResponse} from '../util/response';
import {Observable} from 'rxjs';
import {Product, ProductResponse, ProductUpload} from '../models';
import {SharedService} from './shared.service';
import {map} from 'rxjs/operators';

class Files {
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = environment.API_URL + '/product/';
  productFilesUploadUrl = environment.API_URL + '/product/upload';
  pendingPorductUrl = environment.API_URL + '/product/pending/';
  activeProductUrl = environment.API_URL + '/product/active/';


  constructor(private http: HttpClient, private sharedService: SharedService) {
  }

  getAllProducts(): Observable<any> {
    return this.http.get<ApiResponse>(environment.API_URL + '/products');
  }

  getOneProduct(id: string): Observable<any> {
    return this.http.get<ApiResponse>(environment.API_URL + '/products/' + id);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.productUrl + id);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.productUrl + product.id, product);
  }

  createProduct(product: ProductUpload): Observable<any> {
    product.vendorId = this.sharedService.vendorId;
    console.log(product);
    return this.http.post(this.productUrl, product);
  }

  uploadProductFiles(files: Files[]): Observable<any> {
    return this.http.post(this.productFilesUploadUrl, files);
  }

  getPendingProducts(): Observable<Product[]> {
    return this.http.get<ProductResponse>(this.pendingPorductUrl + this.sharedService.vendorId)
      .pipe(map(response => {
        return response.products;
      }));
  }
  getActiveProducts(): Observable<Product[]> {
    return this.http.get<ProductResponse>(this.activeProductUrl + this.sharedService.vendorId)
      .pipe(map(response => {
        return response.products;
      }));
  }


}
