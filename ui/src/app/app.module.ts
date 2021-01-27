import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SendfileComponent } from './sendfile/sendfile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductComponent } from './product/product.component';
import { DanhthiepComponent } from './danhthiep/danhthiep.component';
import { ToroiComponent } from './toroi/toroi.component';
import { PaymentComponent } from './payment/payment.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { TuigiayComponent } from './tuigiay/tuigiay.component';
import { BaothuComponent } from './baothu/baothu.component';
import { ThetreoComponent } from './thetreo/thetreo.component';
import { BaolixiComponent } from './baolixi/baolixi.component';
import { ThetichdiemComponent } from './thetichdiem/thetichdiem.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SendfileComponent,
    AboutusComponent,
    ProductComponent,
    DanhthiepComponent,
    ToroiComponent,
    PaymentComponent,
    CatalogueComponent,
    TuigiayComponent,
    BaothuComponent,
    ThetreoComponent,
    BaolixiComponent,
    ThetichdiemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
