import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { NguCarouselModule } from '@ngu/carousel';
import { RouterModule, Routes } from '@angular/router';

import { HeroModule } from './hero/hero.module';
import { HeaderModule } from './header/header.module';
import { MultipleProductsCarouselModule } from './multiple-products-carousel/multiple-products-carousel.module';
import { ProductsTabModule } from './products-tab/products-tab.module';
import { VergleichSchlafmoeglichkeitenModule } from './vergleich-schlafmoeglichkeiten/vergleich-schlafmoeglichkeiten.module';

import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FeaturesComponent } from './features/features.component';
import { BrandsComponent } from './brands/brands.component';
import { MultipleProductsCarouselComponent } from './multiple-products-carousel/multiple-products-carousel.component';
import { ProductsTabComponent } from './products-tab/products-tab.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { TippProduktComponent } from './tipp-produkt/tipp-produkt.component';
import { VergleichSchlafmoeglichkeitenComponent } from './vergleich-schlafmoeglichkeiten/vergleich-schlafmoeglichkeiten.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FooterModule } from './footer/footer.module';
import { AdvantagesComponent } from './advantages/advantages.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: '**', component: HomeComponent, redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent,
    BenefitsComponent,
    FeaturesComponent,
    BrandsComponent,
    MultipleProductsCarouselComponent,
    ProductsTabComponent,
    ImpressumComponent,
    DatenschutzComponent,
    TippProduktComponent,
    VergleichSchlafmoeglichkeitenComponent,
    FooterComponent,
    HomeComponent,
    AdvantagesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    NguCarouselModule,
    RouterModule.forRoot(appRoutes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    scrollOffset: [0, 64],
    onSameUrlNavigation: 'reload',
    initialNavigation: 'enabled'
}),
    HeaderModule,
    HeroModule,
    MultipleProductsCarouselModule,
    VergleichSchlafmoeglichkeitenModule,
    ProductsTabModule,
    FooterModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
