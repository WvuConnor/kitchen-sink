import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './Navagation/topnav/topnav.component';
import { BgroupComponent } from './button grouping/bgroup/bgroup.component';
import { Vav2Component } from './secondtopnav/vav2/vav2.component';
import { ColapseComponent } from './colapse/colapse/colapse.component';
import { CardComponent } from './a-cards/card/card.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { SecondLayoutComponent } from './layouts/second-layout/second-layout.component';
import { ThirdLayoutComponent } from './layouts/third-layout/third-layout.component';
import { FourthLayoutComponent } from './layouts/fourth-layout/fourth-layout.component';
import { FithLayoutComponent } from './layouts/fith-layout/fith-layout.component';
import { HttpClientModule } from "@angular/common/http";
import { UserInfoComponent } from './user-info/user-info/user-info.component';
import { AddProductComponent } from './add-product/add-product.component';
import { envitoment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    BgroupComponent,
    CardComponent,
    Vav2Component,
    ColapseComponent,
    FooterComponent,
    HomeLayoutComponent,
    SecondLayoutComponent,
    ThirdLayoutComponent,
    FourthLayoutComponent,
    FithLayoutComponent,
    UserInfoComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //AngularFireModule.initializeApp(envitoment.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
