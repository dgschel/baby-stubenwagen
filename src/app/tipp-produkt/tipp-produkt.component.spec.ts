import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TippProduktComponent } from './tipp-produkt.component';

describe('TippProduktComponent', () => {
  let component: TippProduktComponent;
  let fixture: ComponentFixture<TippProduktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TippProduktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TippProduktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
