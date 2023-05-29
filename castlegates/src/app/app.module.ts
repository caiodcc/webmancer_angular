import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextPageComponent } from './components/text-page/text-page.component';
import { CardComponent } from './components/partials/card/card.component';

import { CarouselComponent } from './components/partials/carousel/carousel.component';
import { CreationPageComponent } from './components/creation-page/creation-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { TextosComponent } from './components/textos/textos.component';

import { WhyNgComponent } from './components/why-ng/why-ng.component'
import { FormsModule } from '@angular/forms';
import { TextReadComponent } from './components/text-read/text-read.component';

@NgModule({
  declarations: [
    AppComponent,
    TextPageComponent,
    CardComponent,
    CarouselComponent,
    CreationPageComponent,
    HomePageComponent,
    ContactPageComponent,
    TextosComponent,
    WhyNgComponent,
    TextReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
