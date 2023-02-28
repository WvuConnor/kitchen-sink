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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
