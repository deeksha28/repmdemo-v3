import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingExpensesComponent } from './heating-expenses.component';

describe('HeatingExpensesComponent', () => {
  let component: HeatingExpensesComponent;
  let fixture: ComponentFixture<HeatingExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatingExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatingExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
