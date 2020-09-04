import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersticsComponent } from './characterstics.component';

describe('CharactersticsComponent', () => {
  let component: CharactersticsComponent;
  let fixture: ComponentFixture<CharactersticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
