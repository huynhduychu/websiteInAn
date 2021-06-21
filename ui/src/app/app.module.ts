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
import { LocationStrategy, Location,  PathLocationStrategy } from '@angular/common';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { DanhthiepgiareodauComponent } from './danhthiepgiareodau/danhthiepgiareodau.component';
import { DanhthiepgiaykraftComponent } from './danhthiepgiaykraft/danhthiepgiaykraft.component';
import { DanhthiepgiaymythuatComponent } from './danhthiepgiaymythuat/danhthiepgiaymythuat.component';
import { DanhthiepdepComponent } from './danhthiepdep/danhthiepdep.component';
import { DanhthiepshophoaComponent } from './danhthiepshophoa/danhthiepshophoa.component';
import { DanhthiepshopthoitrangComponent } from './danhthiepshopthoitrang/danhthiepshopthoitrang.component';
import { DanhthieptheoykhachhangComponent } from './danhthieptheoykhachhang/danhthieptheoykhachhang.component';
import { ThetichdiemgiareComponent } from './thetichdiemgiare/thetichdiemgiare.component';
import { ThetichdiemquancapheComponent } from './thetichdiemquancaphe/thetichdiemquancaphe.component';
import { ThetichdiemkaraokeComponent } from './thetichdiemkaraoke/thetichdiemkaraoke.component';
import { ThetichdiemquanannhanhComponent } from './thetichdiemquanannhanh/thetichdiemquanannhanh.component';
import { ThetichdiemshopthoitrangComponent } from './thetichdiemshopthoitrang/thetichdiemshopthoitrang.component';
import { ThetichdiemspaComponent } from './thetichdiemspa/thetichdiemspa.component';
import { ThetichdiemshophoaComponent } from './thetichdiemshophoa/thetichdiemshophoa.component';
import { ThetichdiemclubComponent } from './thetichdiemclub/thetichdiemclub.component';
import { DanhthiepdapnoiComponent } from './danhthiepdapnoi/danhthiepdapnoi.component';
import { HopdungmyphamComponent } from './hopdungmypham/hopdungmypham.component';
import { HopgiayComponent } from './hopgiay/hopgiay.component';
import { DanhthiepcaocapComponent } from './danhthiepcaocap/danhthiepcaocap.component';

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
    ThetichdiemComponent,
    DanhthiepgiareodauComponent,
    DanhthiepgiaykraftComponent,
    DanhthiepgiaymythuatComponent,
    DanhthiepdepComponent,
    DanhthiepshophoaComponent,
    DanhthiepshopthoitrangComponent,
    DanhthieptheoykhachhangComponent,
    ThetichdiemgiareComponent,
    ThetichdiemquancapheComponent,
    ThetichdiemkaraokeComponent,
    ThetichdiemquanannhanhComponent,
    ThetichdiemshopthoitrangComponent,
    ThetichdiemspaComponent,
    ThetichdiemshophoaComponent,
    ThetichdiemclubComponent,
    DanhthiepdapnoiComponent,
    HopdungmyphamComponent,
    HopgiayComponent,
    DanhthiepcaocapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IvyCarouselModule
  ],
  providers: [
    Location, {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }