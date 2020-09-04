import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicatePropComponent } from './duplicate-prop.component';

describe('DuplicatePropComponent', () => {
  let component: DuplicatePropComponent;
  let fixture: ComponentFixture<DuplicatePropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicatePropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicatePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
