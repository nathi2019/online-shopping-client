import { BrowserModule}from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
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
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { SalesViewComponent } from './admin/sales-view/sales-view.component';
import { ManageEmployeeComponent } from './admin/manage-employee/manage-employee.component';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {CatagoryPaneComponent, CategoryListDialogComponent} from './shop-home/shop-cockpit/catagory-pane/catagory-pane.component';
import { ProductListComponent } from './shop-home/shop-cockpit/product-list/product-list.component';
import { UserCartComponent } from './shop-home/user-cart/user-cart.component';
import { AppRoutingModule } from '../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './shop-home/order/order.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import {ProductItemComponent } from './shop-home/shop-cockpit/product-list/product-item/product-item.component';
import { ShopCockpitComponent } from './shop-home/shop-cockpit/shop-cockpit.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';


import {MatBadgeModule} from '@angular/material/badge';
import { CartItemListComponent } from './shop-home/user-cart/cart-item-list/cart-item-list.component';
import { CartItemComponent } from './shop-home/user-cart/cart-item-list/cart-item/cart-item.component';
import { CheckoutPaneComponent } from './shop-home/user-cart/checkout-pane/checkout-pane.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    SalesViewComponent,
      ManageEmployeeComponent,
      ManageProductComponent,
      EditProfileComponent,
      ShopHomeComponent,
      LoginComponent,
      SignupComponent,
      CatagoryPaneComponent,
      ProductListComponent,
      UserCartComponent,
      PaymentComponent,
      OrderComponent,
      PageHeaderComponent,
      PageFooterComponent,
      ProductItemComponent,
      ShopCockpitComponent,
    CategoryListDialogComponent,
    CartItemListComponent,
    CartItemComponent,
    CheckoutPaneComponent],
import { NgxStripeModule } from 'ngx-stripe';


@NgModule({
  declarations: [AdminHomeComponent, SalesViewComponent, ManageEmployeeComponent, ManageProductComponent, EditProfileComponent,
    ShopHomeComponent, LoginComponent, SignupComponent, UserCartComponent, PaymentComponent, OrderComponent, PageHeaderComponent, PageFooterComponent,],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatSliderModule,
    MatSelectModule,
    MatChipsModule,
      MatInputModule,
      MatFormFieldModule,
      MatDialogModule,
    MatCheckboxModule,
    MatBadgeModule,
      FormsModule,
    MatListModule

  ],
  exports: [AdminHomeComponent,
            SalesViewComponent,
            CatagoryPaneComponent,
            ProductListComponent,
            UserCartComponent,
            ShopHomeComponent
          ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    MatFormFieldModule,
    MatTabsModule,
    MatCheckboxModule,
    NgxStripeModule.forRoot('pk_test_51Hbp52GbMrLY47lRPjYURzUAlbO8kNTUWtcYrnWyRFDK5T9RwIp5hLVECYgNSBa5t3rHN7TFLOTHRJGo8n70WiHL00kBFNHyMb'),
  ],
  exports: [AdminHomeComponent,
    SalesViewComponent,
    UserCartComponent,
    ShopHomeComponent,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule { }
