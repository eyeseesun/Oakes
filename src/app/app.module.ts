import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';
import * as _ from 'underscore';
import ScrollMagic from 'scrollmagic';
import TimelineMax from 'gsap/TimelineMax';
import 'hammerjs';


import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { BlankpageComponent } from './blankpage/blankpage.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    MenuComponent,
    HomeComponent,
    BlankpageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
