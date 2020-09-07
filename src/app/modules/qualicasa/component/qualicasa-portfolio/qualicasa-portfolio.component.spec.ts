import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualicasaPortfolioComponent } from './qualicasa-portfolio.component';

describe('QualicasaPortfolioComponent', () => {
  let component: QualicasaPortfolioComponent;
  let fixture: ComponentFixture<QualicasaPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualicasaPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualicasaPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
