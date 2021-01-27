import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { SendfileComponent } from './sendfile/sendfile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DanhthiepComponent } from './danhthiep/danhthiep.component';
import { ThetichdiemComponent } from './thetichdiem/thetichdiem.component';
import { ToroiComponent } from './toroi/toroi.component';
import { PaymentComponent } from './payment/payment.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { TuigiayComponent } from './tuigiay/tuigiay.component';
import { BaothuComponent } from './baothu/baothu.component';
import { ThetreoComponent } from './thetreo/thetreo.component';
import { BaolixiComponent } from './baolixi/baolixi.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sendfile', component: SendfileComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'danhthiep', component: DanhthiepComponent, 
      children:[ 
        { path: 'danhthiep', component: DanhthiepComponent } ,
      ] 
  },
  { path: 'thetichdiem', component: ThetichdiemComponent, 
      children:[ 
        { path: 'thetichdiem', component: ThetichdiemComponent } ,
      ] 
  },
  { path: 'toroi', component: ToroiComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'tuigiay', component: TuigiayComponent },
  { path: 'baothu', component: BaothuComponent },
  { path: 'thetreo', component: ThetreoComponent },
  { path: 'baolixi', component: BaolixiComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
