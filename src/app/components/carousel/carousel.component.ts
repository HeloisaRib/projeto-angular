import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides = [
    {img: "https://i.pinimg.com/originals/9f/0d/20/9f0d20b3bb9af7a7a0e216be43ec8d7e.jpg"},
    {img: "https://i.pinimg.com/originals/79/e2/c9/79e2c9402014ead1eebf6c9f184c5bf8.jpg"},
    {img: "https://i.pinimg.com/originals/ef/18/7a/ef187a95ccfa8961846bb1151a1cd31c.jpg"},
    {img: "https://i.pinimg.com/originals/65/7c/55/657c553a704454f308ff67513a923847.jpg"},
    {img: "https://i.pinimg.com/originals/b5/7c/db/b57cdbc9f87989a2c480195c60475d45.jpg"},
    {img: "https://i.pinimg.com/originals/c0/c7/1b/c0c71bcadc86be5ea1c9193e71e3b05a.jpg"},
    {img: "https://i.pinimg.com/originals/26/0a/06/260a0691899db3bcc8f7a01821b36f2e.jpg"},
    {img: "https://i.pinimg.com/originals/40/0b/07/400b07e863d87804a49f8d9f7c928387.jpg"},
    {img: "https://i.pinimg.com/originals/d5/80/6e/d5806ecc88f8a396f8aff32b85a52fea.jpg"},
    {img: "https://i.pinimg.com/originals/d0/d5/91/d0d59102cf996bdd113c54019099fea1.jpg"} 
  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "pauseOnHover": true,
    "infinite": true,
    "responsive": [
      {
        "breakpoint": 992,
        "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 2,
          "slidesToScroll": 2
        }
      },
      {
        "breakpoint": 768,
        "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      }
    ]
  };
}
