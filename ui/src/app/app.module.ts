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
import { PrintingdecalComponent } from './printingdecal/printingdecal.component';
import { PaymentComponent } from './payment/payment.component';
import { PrintingppComponent } from './printingpp/printingpp.component';
import { PrintingadvertisingComponent } from './printingadvertising/printingadvertising.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SendfileComponent,
    AboutusComponent,
    ProductComponent,
    PrintingnamecardComponent,
    PrintingdecalComponent,
    PaymentComponent,
    PrintingppComponent,
    PrintingadvertisingComponent
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
