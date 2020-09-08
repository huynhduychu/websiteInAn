import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { SendfileComponent } from './sendfile/sendfile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PrintingnamecardComponent } from './printingnamecard/printingnamecard.component';
import { IntoroiComponent } from './intoroi/intoroi.component';
import { PaymentComponent } from './payment/payment.component';
import { IncatalogueComponent } from './incatalogue/incatalogue.component';
import { IntuigiayComponent } from './intuigiay/intuigiay.component';
import { InbaothuComponent } from './inbaothu/inbaothu.component';
import { InthetreoComponent } from './inthetreo/inthetreo.component';
import { InbaolixiComponent } from './inbaolixi/inbaolixi.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sendfile', component: SendfileComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'printingnamecard', component: PrintingnamecardComponent },
  { path: 'intoroi', component: IntoroiComponent },
  { path: 'incatalogue', component: IncatalogueComponent },
  { path: 'intuigiay', component: IntuigiayComponent },
  { path: 'inbaothu', component: InbaothuComponent },
  { path: 'inthetreo', component: InthetreoComponent },
  { path: 'inbaolixi', component: InbaolixiComponent },
  { path: 'payment', component: PaymentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
