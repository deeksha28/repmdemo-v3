import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcfPortfolioComponent } from './dcf-portfolio.component';

describe('DcfPortfolioComponent', () => {
  let component: DcfPortfolioComponent;
  let fixture: ComponentFixture<DcfPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcfPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcfPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
