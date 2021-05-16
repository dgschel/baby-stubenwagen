import { Component, OnInit } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  items = [
    { breakpoint: Breakpoints.XSmall, type: 'image/webp', imagePath: 'assets/images/hero/baby-stubenwagen-gluecklich-spielen,w_600.webp' },
    { breakpoint: Breakpoints.XSmall, type: 'image/jpeg', imagePath: 'assets/images/hero/baby-stubenwagen-gluecklich-spielen,w_600.jpg' },
    { breakpoint: Breakpoints.Small, type: 'image/webp', imagePath: 'assets/images/hero/baby-stubenwagen-gluecklich-spielen,w_960.webp' },
    { breakpoint: Breakpoints.Small, type: 'image/jpeg', imagePath: 'assets/images/hero/baby-stubenwagen-gluecklich-spielen,w_960.jpg' },
    { breakpoint: Breakpoints.Medium, type: 'image/webp', imagePath: 'assets/images/hero/baby-stubenwagen-gluecklich-spielen,w_1280.webp' },
    { breakpoint: Breakpoints.Medium, type: 'image/jpeg', imagePath: 'assets/images/hero/baby-stubenwagen-gluecklich-spielen,w_1280.jpg' },
    { breakpoint: Breakpoints.Large, type: 'image/webp', imagePath: 'assets/images/hero/baby-stubenwagen-gluecklich-spielen,w_1920.webp' },
    { breakpoint: Breakpoints.Large, type: 'image/jpeg', imagePath: 'assets/images/hero/baby-stubenwagen-gluecklich-spielen,w_1920.jpg' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
