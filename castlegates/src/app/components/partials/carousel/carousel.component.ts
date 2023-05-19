import { Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {


  constructor(private renderer: Renderer2){

  }
  
ngAfterViewInit() {
  const firstSlide = document.querySelector('#myCarousel .carousel-item');
  this.renderer.addClass(firstSlide, 'active');
}
}
