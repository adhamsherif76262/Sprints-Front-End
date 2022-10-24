import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CartComponent } from './cart/cart.component';
import { CPUsComponent } from './cpus/cpus.component';
import { MonitorsComponent } from './monitors/monitors.component';
import { MousesKeyboardsComponent } from './mouses-keyboards/mouses-keyboards.component';
import { MobilePhonesComponent } from './mobile-phones/mobile-phones.component';
import { StandardLaptopsComponent } from './standard-laptops/standard-laptops.component';
import { GamingLaptopsComponent } from './gaming-laptops/gaming-laptops.component';
import { HeadphonesSpeakersComponent } from './headphones-speakers/headphones-speakers.component';
import { InternalExternalMemoryStoragesComponent } from './internal-external-memory-storages/internal-external-memory-storages.component';
import { InternalExternalCoolingFansComponent } from './internal-external-cooling-fans/internal-external-cooling-fans.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    AboutUsComponent,
    ContactUsComponent,
    CPUsComponent,
    MonitorsComponent,
    MousesKeyboardsComponent,
    MobilePhonesComponent,
    StandardLaptopsComponent,
    GamingLaptopsComponent,
    HeadphonesSpeakersComponent,
    InternalExternalMemoryStoragesComponent,
    InternalExternalCoolingFansComponent,
    CartComponent,
    ProductItemComponent,
    ProductItemDetailsComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
