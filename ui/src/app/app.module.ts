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
import { PrintingnamecardComponent } from './printingnamecard/printingnamecard.component';
import { IntoroiComponent } from './intoroi/intoroi.component';
import { PaymentComponent } from './payment/payment.component';
import { IncatalogueComponent } from './incatalogue/incatalogue.component';
import { IntuigiayComponent } from './intuigiay/intuigiay.component';
import { InbaothuComponent } from './inbaothu/inbaothu.component';
import { InthetreoComponent } from './inthetreo/inthetreo.component';
import { InbaolixiComponent } from './inbaolixi/inbaolixi.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SendfileComponent,
    AboutusComponent,
    ProductComponent,
    PrintingnamecardComponent,
    IntoroiComponent,
    PaymentComponent,
    IncatalogueComponent,
    IntuigiayComponent,
    InbaothuComponent,
    InthetreoComponent,
    InbaolixiComponent
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
