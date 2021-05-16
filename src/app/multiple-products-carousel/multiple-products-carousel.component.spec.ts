import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleProductsCarouselComponent } from './multiple-products-carousel.component';

describe('MultipleProductsCarouselComponent', () => {
  let component: MultipleProductsCarouselComponent;
  let fixture: ComponentFixture<MultipleProductsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleProductsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleProductsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
