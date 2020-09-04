import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsproComponent } from './mapspro.component';

describe('MapsproComponent', () => {
  let component: MapsproComponent;
  let fixture: ComponentFixture<MapsproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
