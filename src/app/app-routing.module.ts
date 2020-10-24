import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCartComponent } from './pages/shop-home/user-cart/user-cart.component';
import { OrderComponent } from './pages/shop-home/order/order.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { ShopHomeComponent } from './pages/shop-home/shop-home.component';
import {ShopCockpitComponent} from './pages/shop-home/shop-cockpit/shop-cockpit.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import {PaymentComponent} from './pages/payment/payment.component';



const routes: Routes = [
  { path: '', redirectTo: 'shop-home', pathMatch: 'full' },
  { path: 'admin', component: AdminHomeComponent },
  {
    path: 'shop-home',
    children: [
      { path: '', component: ShopCockpitComponent },
      { path: 'orders', component: OrderComponent },
           { path: 'orders', component: OrderComponent },
      { path: 'cart', component: UserCartComponent },
      { path: 'edit-profile', component: EditProfileComponent },

    ],
    component: ShopHomeComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
