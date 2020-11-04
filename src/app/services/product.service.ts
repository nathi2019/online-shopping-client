import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ApiResponse} from '../util/response';
import {Observable} from 'rxjs';
import {Product, ProductImageResponseModel, ProductRequest, ProductResponse} from '../models';
import {SharedService} from './shared.service';
import {map} from 'rxjs/operators';

class Files {
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = environment.API_URL + '/products';
  productFileUploadUrl = environment.API_URL + '/products/upload';
  pendingProductUrl = environment.API_URL + '/products/pending';
  activeProductUrl = environment.API_URL + '/products/active';
  productsUrl = environment.API_URL + 'products';
  searchProductUrl = environment.API_URL + '/products/search';
  productList: Product[];

  constructor(private http: HttpClient, private sharedService: SharedService) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<ProductResponse>(this.productUrl)
      .pipe(map(response => {
        return response.products;
      }));
  }

  getProduct(id: string): Observable<any> {
    return this.http.get<ApiResponse>(this.productUrl + id);
  }

  deleteProduct(id: number): Observable<any> {
    const params = new HttpParams().append('vendorId', this.sharedService.vendorId.toString())
      .append('productId', id.toString());
    return this.http.delete(this.productUrl, {params});
  }

  updateProduct(product: Product): Observable<Product> {
    const params = new HttpParams().append('vendorId', this.sharedService.vendorId.toString())
      .append('productId', product.id.toString());
    return this.http.put<Product>(this.productUrl, product, {params});
  }

  createProduct(product: ProductRequest): Observable<number> {
    product.vendorId = this.sharedService.vendorId;
    console.log(product);
    return this.http.post<Product>(this.productUrl, product)
      .pipe(map(response => {
        return response.id;
      }));
  }

  uploadProductFile(file: File, id: number): Observable<string> {
    const params = new HttpParams().append('productId', id.toString())
      .append('vendorId', this.sharedService.vendorId.toString());
    return this.http.post<ProductImageResponseModel>(this.productFileUploadUrl, file, {})
      .pipe(
        map(response => {
          return response.url;
        }));
  }

  getPendingProducts(): Observable<Product[]> {
    const params = new HttpParams().append('vendorId', this.sharedService.vendorId.toString());
    return this.http.get<ProductResponse>(this.pendingProductUrl, {params})
      .pipe(map(response => {
        return response.products;
      }));
  }

  getActiveProducts(): Observable<Product[]> {
    const params = new HttpParams().append('vendorId', this.sharedService.vendorId.toString());
    return this.http.get<ProductResponse>(this.activeProductUrl, {params})
      .pipe(map(response => {
        return response.products;
      }));
  }

  searchProduct(keyword: string, category: string): Observable<Product[]> {
    const params = new HttpParams().append('keyword', keyword)
      .append('category', category);

    return this.http.get<ProductResponse>(this.searchProductUrl, {params})
      .pipe(map(response => {
        return response.products;
      }));
  }

}
