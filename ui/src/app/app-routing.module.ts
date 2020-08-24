import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { SendfileComponent } from './sendfile/sendfile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PrintingnamecardComponent } from './printingnamecard/printingnamecard.component';
import { PrintingdecalComponent } from './printingdecal/printingdecal.component';
import { PaymentComponent } from './payment/payment.component';
import { PrintingppComponent } from './printingpp/printingpp.component';
import { PrintingadvertisingComponent } from './printingadvertising/printingadvertising.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sendfile', component: SendfileComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'printingnamecard', component: PrintingnamecardComponent },
  { path: 'printingdecal', component: PrintingdecalComponent },
  { path: 'printingpp', component: PrintingppComponent },
  { path: 'printingadvertising', component: PrintingadvertisingComponent },
  { path: 'payment', component: PaymentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
