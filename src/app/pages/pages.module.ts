import { BrowserModule}from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { SalesViewComponent } from './admin/sales-view/sales-view.component';
import { ManageEmployeeComponent } from './admin/manage-employee/manage-employee.component';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CatagoryPaneComponent } from './shop-home/shop-cockpit/catagory-pane/catagory-pane.component';
import { ProductListComponent } from './shop-home/shop-cockpit/product-list/product-list.component';
import { UserCartComponent } from './shop-home/user-cart/user-cart.component';
import {AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './shop-home/order/order.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import {ProductItemComponent } from './shop-home/shop-cockpit/product-list/product-item/product-item.component';
import { ShopCockpitComponent } from './shop-home/shop-cockpit/shop-cockpit.component';




@NgModule({
  declarations: [AdminHomeComponent, SalesViewComponent, ManageEmployeeComponent, ManageProductComponent, EditProfileComponent,
     ShopHomeComponent, LoginComponent, SignupComponent, CatagoryPaneComponent, ProductListComponent, UserCartComponent, PaymentComponent, OrderComponent, PageHeaderComponent, PageFooterComponent,
      ProductItemComponent,
      ShopCockpitComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  exports: [AdminHomeComponent,
            SalesViewComponent,
            CatagoryPaneComponent,
            ProductListComponent,
            UserCartComponent,
            ShopHomeComponent
          ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule { }
