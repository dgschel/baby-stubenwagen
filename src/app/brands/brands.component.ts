import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  items = [
    {
      link: 'https://amzn.to/39qODJM',
      brand: 'roba',
      alt: 'roba-logo',
      fallback: 'assets/images/brands/roba-logo.jpg',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/brands/roba-logo.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/brands/roba-logo.jpg' }
      ]
    },
    {
      link: 'https://amzn.to/2SbPSXf',
      brand: 'waldin',
      alt: 'waldin-logo',
      fallback: 'assets/images/brands/waldin-logo.jpg',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/brands/waldin-logo.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/brands/waldin-logo.jpg' }
      ]
    },
    {
      link: 'https://amzn.to/2StZxYa',
      brand: 'fabimax',
      alt: 'fabimax-logo',
      fallback: 'assets/images/brands/fabimax-logo.jpg',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/brands/fabimax-logo.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/brands/fabimax-logo.jpg' }
      ]
    },
    {
      link: 'https://amzn.to/2OHJKnI',
      brand: 'baby-vivo',
      alt: 'baby-vivo-logo',
      fallback: 'assets/images/brands/baby-vivo-logo.jpg',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/brands/baby-vivo-logo.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/brands/baby-vivo-logo.jpg' }
      ]
    },
    {
      link: 'https://amzn.to/38hJIKP',
      brand: 'julius-zöllner',
      alt: 'julius-zoellner-logo',
      fallback: 'assets/images/brands/julius-zoellner-logo.jpg',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/brands/julius-zoellner-logo.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/brands/julius-zoellner-logo.jpg' }
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
