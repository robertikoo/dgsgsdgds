import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery'
@Component({
  selector: 'app-eventuales',
  templateUrl: './eventuales.component.html',
  styleUrls: ['./eventuales.component.css']
})
export class EventualesComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  ngOnInit(): void {

    this.galleryOptions = [
        {
            width: '1100px',
            height: '450px',
            thumbnailsColumns: 4,
            imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
            breakpoint: 800,
            width: '100%',
            height: '800px',
            imagePercent: 80,
            thumbnailsPercent: 20,
            thumbnailsMargin: 20,
            thumbnailMargin: 20
        },
        // max-width 400
        {
            breakpoint: 400,
            preview: false
        }
    ];

    this.galleryImages = [
        {
            small: '../assets/img/1.JPG',
           medium: '../assets/img/adoracion.jpg',
            big: '../assets/img/atardecer.jpg'
        },
        {
         small: '../assets/img/1.JPG',
          medium: '../assets/img/atardecer.jpg',
          big: './assets/img/bienvenido.jpg'
        },
        {
         small: './assets/img/1.JPG',
        medium: '../assets/img/atardecer.jpg',
          big: '../assets/img/letrero.jpg'
        }
        ,
        {
         small: './assets/img/1.JPG',
        medium: '../assets/img/atardecer.jpg',
          big: '../assets/img/letrero.jpg'
        }
        ,
        {
         small: './assets/img/1.JPG',
        medium: '../assets/img/atardecer.jpg',
          big: '../assets/img/letrero.jpg'
        }
        ,
        {
         small: './assets/img/1.JPG',
        medium: '../assets/img/atardecer.jpg',
          big: '../assets/img/letrero.jpg'
        }
        ,
        {
         small: './assets/img/1.JPG',
        medium: '../assets/img/atardecer.jpg',
          big: '../assets/img/letrero.jpg'
        }
        ,
        {
         small: './assets/img/1.JPG',
        medium: '../assets/img/atardecer.jpg',
          big: '../assets/img/letrero.jpg'
        }
        ,
        {
         small: './assets/img/1.JPG',
        medium: '../assets/img/atardecer.jpg',
          big: '../assets/img/letrero.jpg'
        }
        ,
        {
         small: './assets/img/1.JPG',
        medium: '../assets/img/atardecer.jpg',
          big: '../assets/img/letrero.jpg'
        }
        ,
        {
         small: './assets/img/1.JPG',
        medium: '../assets/img/atardecer.jpg',
          big: '../assets/img/letrero.jpg'
        }
    ];
}
  

}
