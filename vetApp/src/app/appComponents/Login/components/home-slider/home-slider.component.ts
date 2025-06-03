import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';

import { register } from 'swiper/element/bundle';


// Importar todos los estilos necesarios
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';



@Component({
  selector: 'app-home-slider',
  imports: [],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agregar CUSTOM_ELEMENTS_SCHEMA aquí
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.css'
})
export class HomeSliderComponent implements OnInit , AfterViewInit {

  constructor() {
 
  }

  ngOnInit() {
    register();
  } 
  ngAfterViewInit() {
    setTimeout(() => {
      this.initSLider();
    }, 100);
  }


  public initSLider() : void{
    const swiperEl = document.querySelector('swiper-container') ;
      
      if (swiperEl) {
        const swiperParams = {
          autoplay: {
            delay: 1500,
            disableOnInteraction: false,
          },
          pagination: {
            clickable: true,
          },
          loop: true,
          slidesPerView: 1,
        };

        Object.assign(swiperEl, swiperParams);
        

        try {
          swiperEl.initialize();
          const swiper = swiperEl.swiper;
          swiper.autoplay.start();

        } catch (error) {
        }
      }

  }

}


