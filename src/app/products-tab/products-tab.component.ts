import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-products-tab',
  templateUrl: './products-tab.component.html',
  styleUrls: ['./products-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsTabComponent implements OnInit, AfterViewInit {

  carouselOptions: NguCarouselConfig;
  productsSet = [
    {
      fallback: 'assets/images/product-empfehlung/komplettset/komplettset-babybett.jpg',
      alt: 'stubenwagen-komplettset-babybett',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/product-empfehlung/komplettset/komplettset-babybett.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/product-empfehlung/komplettset/komplettset-babybett.jpg' }
      ]
    },
    {
      fallback: 'assets/images/product-empfehlung/komplettset/komplettset.jpg',
      alt: 'stubenwagen-komplettset',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/product-empfehlung/komplettset/komplettset.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/product-empfehlung/komplettset/komplettset.jpg' }
      ]
    },
    {
      fallback: 'assets/images/product-empfehlung/komplettset/komplettset-siegel-hergestellt.jpg',
      alt: 'stubenwagen-komplettset-siegel-hergestellt',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/product-empfehlung/komplettset/komplettset-siegel-hergestellt.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/product-empfehlung/komplettset/komplettset-siegel-hergestellt.jpg' }
      ]
    },
    {
      fallback: 'assets/images/product-empfehlung/komplettset/komplettset-siegel-zertifiziert.jpg',
      alt: 'stubenwagen-komplettset-siegel-zertifiziert',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/product-empfehlung/komplettset/komplettset-siegel-zertifiziert.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/product-empfehlung/komplettset/komplettset-siegel-zertifiziert.jpg' }
      ]
    },
    {
      fallback: 'assets/images/product-empfehlung/komplettset/komplettset-qualität.jpg',
      alt: 'stubenwagen-komplettset-qualität',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/product-empfehlung/komplettset/komplettset-qualität.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/product-empfehlung/komplettset/komplettset-qualität.jpg' }
      ]
    },
    {
      fallback: 'assets/images/product-empfehlung/komplettset/komplettset-erfahrung.jpg',
      alt: 'komplettset-erfahrung',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/product-empfehlung/komplettset/komplettset-erfahrung.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/product-empfehlung/komplettset/komplettset-erfahrung.jpg' }
      ]
    }
  ];
  productsStubenwagen = [
    {
      fallback: 'assets/images/product-empfehlung/stubenwagen/stubenwagen.jpg',
      alt: 'stubenwagen',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/product-empfehlung/stubenwagen/stubenwagen.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/product-empfehlung/stubenwagen/stubenwagen.jpg' }
      ]
    },
    {
      fallback: 'assets/images/product-empfehlung/stubenwagen/stubenwagen-geschlossen.jpg',
      alt: 'stubenwagen-geschlossen',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/product-empfehlung/stubenwagen/stubenwagen-geschlossen.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/product-empfehlung/stubenwagen/stubenwagen-geschlossen.jpg' }
      ]
    },
    {
      fallback: 'assets/images/product-empfehlung/stubenwagen/stubenwagen-modelle.jpg',
      alt: 'stubenwagen-modelle',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/product-empfehlung/stubenwagen/stubenwagen-modelle.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/product-empfehlung/stubenwagen/stubenwagen-modelle.jpg' }
      ]
    }
  ];
  productsGitterbett = [
    {
      fallback: 'assets/images/product-empfehlung/gitterbett/gitterbett.jpg',
      alt: 'gitterbett',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/product-empfehlung/gitterbett/gitterbett.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/product-empfehlung/gitterbett/gitterbett.jpg' }
      ]
    },
    {
      fallback: 'assets/images/product-empfehlung/gitterbett/gitterbett-2.jpg',
      alt: 'gitterbett',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/product-empfehlung/gitterbett/gitterbett-2.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/product-empfehlung/gitterbett/gitterbett-2.jpg' }
      ]
    },
    {
      fallback: 'assets/images/product-empfehlung/gitterbett/gitterbett-schaumstoffmatratze.jpg',
      alt: 'gitterbett-schaumstoffmatratze',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/product-empfehlung/gitterbett/gitterbett-schaumstoffmatratze.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/product-empfehlung/gitterbett/gitterbett-schaumstoffmatratze.jpg' }
      ]
    },
    {
      fallback: 'assets/images/product-empfehlung/gitterbett/gitterbett-schaumstoffmatratze-2.jpg',
      alt: 'gitterbett-schaumstoffmatratze',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/product-empfehlung/gitterbett/gitterbett-schaumstoffmatratze-2.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/product-empfehlung/gitterbett/gitterbett-schaumstoffmatratze-2.jpg' }
      ]
    },
    {
      fallback: 'assets/images/product-empfehlung/gitterbett/gitterbett-zahnschutz.jpg',
      alt: 'gitterbett-zahnschutz',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/product-empfehlung/gitterbett/gitterbett-zahnschutz.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/product-empfehlung/gitterbett/gitterbett-zahnschutz.jpg' }
      ]
    },
    {
      fallback: 'assets/images/product-empfehlung/gitterbett/gitterbett-tiefer.jpg',
      alt: 'gitterbett-tiefer',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/product-empfehlung/gitterbett/gitterbett-tiefer.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/product-empfehlung/gitterbett/gitterbett-tiefer.jpg' }
      ]
    },
    {
      fallback: 'assets/images/product-empfehlung/gitterbett/gitterbett-höhenverstellbar.jpg',
      alt: 'gitterbett-höhenverstellbar',
      images: [
        { type: 'image/webp', imagePath: 'assets/images/product-empfehlung/gitterbett/gitterbett-höhenverstellbar.webp' },
        { type: 'image/jpeg', imagePath: 'assets/images/product-empfehlung/gitterbett/gitterbett-höhenverstellbar.jpg' }
      ]
    }
  ];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: { timing: 7000 },
      point: {
        visible: true
      },
      velocity: 0,
      load: 1,
      touch: true,
      loop: false
    };
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

}
