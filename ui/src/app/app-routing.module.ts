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
import { DanhthiepgiareodauComponent } from './danhthiepgiareodau/danhthiepgiareodau.component';
import { DanhthiepcaocapComponent } from './danhthiepcaocap/danhthiepcaocap.component';
import { DanhthiepgiaykraftComponent } from './danhthiepgiaykraft/danhthiepgiaykraft.component';
import { DanhthiepgiaymythuatComponent } from './danhthiepgiaymythuat/danhthiepgiaymythuat.component';
import { ThetichdiemgiareComponent } from './thetichdiemgiare/thetichdiemgiare.component';
import { DanhthiepshophoaComponent } from './danhthiepshophoa/danhthiepshophoa.component';
import { DanhthiepshopthoitrangComponent } from './danhthiepshopthoitrang/danhthiepshopthoitrang.component';
import { DanhthieptheoykhachhangComponent } from './danhthieptheoykhachhang/danhthieptheoykhachhang.component';
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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'san-pham', component: ProductComponent },
  { path: 'lien-he', component: ContactComponent },
  { path: 'gui-file', component: SendfileComponent },
  { path: 'gioi-thieu', component: AboutusComponent },
  { path: 'danh-thiep', component: DanhthiepComponent 
      // children:[ 
      //   { path: 'danh-thiep', component: DanhthiepComponent },
      //   { path: 'in-danh-thiep-gia-re-o-dau', component: DanhthiepgiareodauComponent },
      //   { path: 'in-danh-thiep-giay-kraft', component: DanhthiepgiareodauComponent },
      //   { path: 'in-danh-thiep-giay-my-thuat', component: DanhthiepgiaymythuatComponent },
      // ] 
  },
  { path: 'in-danh-thiep-gia-re-o-dau', component: DanhthiepgiareodauComponent },
  { path: 'danh-thiep-cao-cap', component: DanhthiepcaocapComponent },
  { path: 'danh-thiep-giay-kraft', component: DanhthiepgiaykraftComponent },
  { path: 'danh-thiep-dap-noi', component: DanhthiepdapnoiComponent },
  { path: 'in-danh-thiep-giay-my-thuat', component: DanhthiepgiaymythuatComponent },
  { path: 'danh-thiep-shop-hoa', component: DanhthiepshophoaComponent },
  { path: 'danh-thiep-shop-thoi-trang', component: DanhthiepshopthoitrangComponent },
  { path: 'danh-thiep-theo-y-khach-hang', component: DanhthieptheoykhachhangComponent },
  { path: 'the-tich-diem', component: ThetichdiemComponent,
      children:[ 
        { path: 'the-tich-diem', component: ThetichdiemComponent } ,
      ] 
  },
  { path: 'the-tich-diem-gia-re', component: ThetichdiemgiareComponent },
  { path: 'the-tich-diem-quan-ca-phe', component: ThetichdiemquancapheComponent },
  { path: 'the-tich-diem-karaoke', component: ThetichdiemkaraokeComponent },
  { path: 'the-tich-diem-quan-ca-phe', component: ThetichdiemquancapheComponent },
  { path: 'the-tich-diem-quan-an-nhanh', component: ThetichdiemquanannhanhComponent },
  { path: 'the-tich-diem-shop-thoi-trang', component: ThetichdiemshopthoitrangComponent },
  { path: 'the-tich-diem-spa', component: ThetichdiemspaComponent },
  { path: 'the-tich-diem-shop-hoa', component: ThetichdiemshophoaComponent },
  { path: 'the-tich-diem-club', component: ThetichdiemclubComponent },

  { path: 'to-roi', component: ToroiComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'tui-giay', component: TuigiayComponent },
  { path: 'hop-giay', component: HopgiayComponent },
  { path: 'hop-dung-my-pham', component: HopdungmyphamComponent },
  { path: 'bao-thu', component: BaothuComponent },
  { path: 'the-treo', component: ThetreoComponent },
  { path: 'bao-li-xi', component: BaolixiComponent },
  { path: 'thanh-toan', component: PaymentComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: false, relativeLinkResolution: 'legacy' })    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
