import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextPageComponent } from './components/text-page/text-page.component';
import { CardComponent } from './components/partials/card/card.component';
import { LoadingComponent } from './components/partials/loading/loading.component';
import { ComentariosComponent } from './components/partials/comentarios/comentarios.component';
import { CarouselComponent } from './components/partials/carousel/carousel.component';
import { CreationPageComponent } from './components/creation-page/creation-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    TextPageComponent,
    CardComponent,
    LoadingComponent,
    ComentariosComponent,
    CarouselComponent,
    CreationPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
