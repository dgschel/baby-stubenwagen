import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VergleichSchlafmoeglichkeitenComponent } from './vergleich-schlafmoeglichkeiten.component';

describe('VergleichSchlafmoeglichkeitenComponent', () => {
  let component: VergleichSchlafmoeglichkeitenComponent;
  let fixture: ComponentFixture<VergleichSchlafmoeglichkeitenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VergleichSchlafmoeglichkeitenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VergleichSchlafmoeglichkeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
