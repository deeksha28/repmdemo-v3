import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitAndLossPortfolioComponent } from './profit-and-loss-portfolio.component';

describe('ProfitAndLossPortfolioComponent', () => {
  let component: ProfitAndLossPortfolioComponent;
  let fixture: ComponentFixture<ProfitAndLossPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitAndLossPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitAndLossPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
