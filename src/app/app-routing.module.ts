import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CPUsComponent } from './cpus/cpus.component';
import { GamingLaptopsComponent } from './gaming-laptops/gaming-laptops.component';
import { HeadphonesSpeakersComponent } from './headphones-speakers/headphones-speakers.component';
import { HomeComponent } from './home/home.component';
import { InternalExternalCoolingFansComponent } from './internal-external-cooling-fans/internal-external-cooling-fans.component';
import { InternalExternalMemoryStoragesComponent } from './internal-external-memory-storages/internal-external-memory-storages.component';
import { MobilePhonesComponent } from './mobile-phones/mobile-phones.component';
import { MonitorsComponent } from './monitors/monitors.component';
import { MousesKeyboardsComponent } from './mouses-keyboards/mouses-keyboards.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StandardLaptopsComponent } from './standard-laptops/standard-laptops.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'Sign-In',component:SignInComponent},
  {path: 'Sign-Up',component:SignUpComponent},
  {path: 'About-Us',component:AboutUsComponent},
  {path: 'Contact-Us',component:ContactUsComponent},
  {path: 'Cart',component:CartComponent},
  {path: 'product-item-details',component:ProductItemDetailsComponent},
  {path: 'CPUs',component:CPUsComponent},
  {path: 'Monitors',component:MonitorsComponent},
  {path: 'Mouses-Keyboards',component:MousesKeyboardsComponent},
  {path: 'Mobile-Phones',component:MobilePhonesComponent},
  {path: 'Standard-Laptops',component:StandardLaptopsComponent},
  {path: 'Gaming-Laptops',component:GamingLaptopsComponent},
  {path: 'Headphones-Speakers',component:HeadphonesSpeakersComponent},
  {path: 'Internal-External-Memory-Storages',component:InternalExternalMemoryStoragesComponent},
  {path: 'Internal-External-Cooling-Fans',component:InternalExternalCoolingFansComponent},
  {path: 'Order-Confirmation',component:OrderConfirmationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
