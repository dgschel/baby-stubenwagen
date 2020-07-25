import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-multiple-products-carousel',
  templateUrl: './multiple-products-carousel.component.html',
  styleUrls: ['./multiple-products-carousel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleProductsCarouselComponent implements OnInit, AfterViewInit {

  carouselOptions: NguCarouselConfig;
  products = [
    {
      fallback: 'assets/images/multiple-products-carousel/Waldin-Stubenwagen-Set.jpg',
      alt: 'stubenwagen-set-waldin',
      description: 'WALDIN Baby Stubenwagen-Set mit Ausstattung, XXL, Bollerwagen, komplett',
      link: 'https://amzn.to/2ux67VK',
      ratings: [1, 1, 1, 1, 0.5],
      category: 'Stubenwagen',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/multiple-products-carousel/Waldin-Stubenwagen-Set.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/multiple-products-carousel/Waldin-Stubenwagen-Set.jpg' }
      ]
    },
    {
      fallback: 'assets/images/multiple-products-carousel/Chicco-Beistellbett.jpg',
      alt: 'beistellbett-chicco',
      description: 'Chicco Beistellbett Next2Me mit einfaches und sicheres Befestigungssystem',
      link: 'https://amzn.to/2OKNKDU',
      ratings: [1, 1, 1, 1, 0.5],
      category: 'Beistellbett',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/multiple-products-carousel/Chicco-Beistellbett.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/multiple-products-carousel/Chicco-Beistellbett.jpg' }
      ]
    },
    {
      fallback: 'assets/images/multiple-products-carousel/Hauck-Stubenwagen.jpg',
      alt: 'stubenwagen-hauck',
      description: 'Hauck Dreamer Stubenwagen, inkl. Matratze und Spielzeugtasche',
      link: 'https://amzn.to/2tKFIUd',
      ratings: [1, 1, 1, 1, 1],
      category: 'Stubenwagen',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/multiple-products-carousel/Hauck-Stubenwagen.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/multiple-products-carousel/Hauck-Stubenwagen.jpg' }
      ]
    },
    {
      fallback: 'assets/images/multiple-products-carousel/Babymajawelt-Stubenwagen.jpg',
      alt: 'Babymajawelt-Stubenwagen',
      description: 'Babymajawelt® Stubenwagen Komplett Set 10 Teile, inkl. Matratze',
      link: 'https://amzn.to/2VaaWPV',
      ratings: [1, 1, 1, 1, 0.5],
      category: 'Stubenwagen',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/multiple-products-carousel/Babymajawelt-Stubenwagen.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/multiple-products-carousel/Babymajawelt-Stubenwagen.jpg' }
      ]
    },
    {
      fallback: 'assets/images/multiple-products-carousel/Niuxen-Stubenwagen.jpg',
      alt: 'Niuxen-Stubenwagen',
      description: 'Niuxen Stubenwagen Komplett Set Sterne 10- tlg. mit Designwahl',
      link: 'https://amzn.to/37JtLw1',
      ratings: [1, 1, 1, 1, 0.5],
      category: 'Stubenwagen',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/multiple-products-carousel/Niuxen-Stubenwagen.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/multiple-products-carousel/Niuxen-Stubenwagen.jpg' }
      ]
    }
  ];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 1,
      speed: 400,
      velocity: 0,
      interval: { timing: 7000 },
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: false
    };
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

}
