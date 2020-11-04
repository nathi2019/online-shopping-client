import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ApiResponse} from '../util/response';
import {Observable} from 'rxjs';
import {CategoryResponse, Product, ProductImageResponseModel, ProductRequest, ProductResponse} from '../models';
import {SharedService} from './shared.service';
import {map} from 'rxjs/operators';

class Files {
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = environment.API_URL + '/products';
  categoryUrl = environment.API_URL + '/categories';
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
    return this.http.get<ApiResponse>(this.productUrl + '/' + id);
  }

  deleteProduct(id: number): Observable<any> {
    const params = new HttpParams().append('vendorId', this.sharedService.vendorId.toString())
      .append('productId', id.toString());
    return this.http.delete(this.productUrl, {params});
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.productUrl, product);
  }

  createProduct(product: ProductRequest): Observable<number> {


    product.vendorId = this.sharedService.vendorId;
    return this.http.post<Product>(this.productUrl, product)
      .pipe(map(response => {
        return response.id;
      }));
  }


  getProductImages(id: number): Observable<string[]> {
    return this.http.get<ProductImageResponseModel>(this.productUrl + '/res/' + id)
      .pipe(map(
        (response) => {
          return response.imageUrl;
        }
      ));
  }

  uploadProductFile(file: File, id: number): Observable<string> {
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('productId', id.toString());
    uploadData.append('vendorId', this.sharedService.vendorId.toString());
    return this.http.post<string>(this.productUrl + '/res', uploadData);
  }

  getPendingProducts(): Observable<Product[]> {
    const params = new HttpParams().append('vendorId', this.sharedService.vendorId.toString());
    return this.http.get<ProductResponse>(this.productUrl + '/pending', {params})
      .pipe(map(response => {
        return response.products;
      }));
  }

  getApprovedProducts(): Observable<Product[]> {
    const params = new HttpParams().append('vendorId', this.sharedService.vendorId.toString());
    return this.http.get<ProductResponse>(this.productUrl + '/approved', {params})
      .pipe(map(response => {
        return response.products;
      }));
  }

  getRejectedProducts(): Observable<Product[]> {
    const params = new HttpParams().append('vendorId', this.sharedService.vendorId.toString());
    return this.http.get<ProductResponse>(this.productUrl + '/' + 'rejected', {params})
      .pipe(map(response => {
        return response.products;
      }));
  }

  searchProduct(keyword: string, category: string): Observable<Product[]> {
    const params = new HttpParams().append('keyword', keyword)
      .append('category', category);

    return this.http.get<ProductResponse>(this.productUrl + '/' + 'search', {params})
      .pipe(map(response => {
        return response.products;
      }));
  }

  getCategories(): Observable<string[]> {
    return this.http.get<CategoryResponse>(this.categoryUrl)
      .pipe(map(response => {
        return response.categories;
      }));
  }
}
