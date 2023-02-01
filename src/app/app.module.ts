import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './Navagation/topnav/topnav.component';
import { BgroupComponent } from './button grouping/bgroup/bgroup.component';
import { CardComponent } from './cards/card/card.component';
import { Vav2Component } from './secondtopnav/vav2/vav2.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    BgroupComponent,
    CardComponent,
    Vav2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
