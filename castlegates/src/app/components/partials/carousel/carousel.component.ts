import { Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  carouselItems = [
    {
      image: 'path/to/image1.jpg',
      caption: 'Legenda 1'
    },
    {
      image: 'path/to/image2.jpg',
      caption: 'Legenda 2'
    },
    {
      image: 'path/to/image3.jpg',
      caption: 'Legenda 3'
    }
  ];
}
