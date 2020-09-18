import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingCardsComponent } from './mapping-cards.component';

describe('MappingCardsComponent', () => {
  let component: MappingCardsComponent;
  let fixture: ComponentFixture<MappingCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
