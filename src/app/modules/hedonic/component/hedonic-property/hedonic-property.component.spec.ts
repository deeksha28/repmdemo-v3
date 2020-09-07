import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HedonicPropertyComponent } from './hedonic-property.component';

describe('HedonicPropertyComponent', () => {
  let component: HedonicPropertyComponent;
  let fixture: ComponentFixture<HedonicPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HedonicPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HedonicPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
