import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedonicPortfolioComponent } from './hedonic-portfolio.component';

describe('HedonicPortfolioComponent', () => {
  let component: HedonicPortfolioComponent;
  let fixture: ComponentFixture<HedonicPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedonicPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedonicPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
