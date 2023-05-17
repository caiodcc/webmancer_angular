import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextPageComponent } from './components/text-page/text-page.component';
import { CardComponent } from './components/partials/card/card.component';
import { LoadingComponent } from './components/partials/loading/loading.component';
import { ComentariosComponent } from './components/partials/comentarios/comentarios.component';
import { CarouselComponent } from './components/partials/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    TextPageComponent,
    CardComponent,
    LoadingComponent,
    ComentariosComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
