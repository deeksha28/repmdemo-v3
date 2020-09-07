import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitAndLossPropertyComponent } from './profit-and-loss-property.component';

describe('ProfitAndLossPropertyComponent', () => {
  let component: ProfitAndLossPropertyComponent;
  let fixture: ComponentFixture<ProfitAndLossPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitAndLossPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitAndLossPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
