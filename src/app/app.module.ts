import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './Navagation/topnav/topnav.component';
import { BgroupComponent } from './button grouping/bgroup/bgroup.component';
import { Vav2Component } from './secondtopnav/vav2/vav2.component';
import { ColapseComponent } from './colapse/colapse/colapse.component';
import { CardComponent } from './a-cards/card/card.component';
import { TnavlayoutComponent } from './layout/tnavlayout/tnavlayout.component';
import { HomeComponent } from './home-layout/home/home.component';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    BgroupComponent,
    CardComponent,
    Vav2Component,
    ColapseComponent,
    TnavlayoutComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
