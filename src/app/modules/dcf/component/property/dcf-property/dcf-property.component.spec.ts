import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcfPropertyComponent } from './dcf-property.component';

describe('DcfPropertyComponent', () => {
  let component: DcfPropertyComponent;
  let fixture: ComponentFixture<DcfPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcfPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcfPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
