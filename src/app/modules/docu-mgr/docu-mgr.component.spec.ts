import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocuMgrComponent } from './docu-mgr.component';

describe('DocuMgrComponent', () => {
  let component: DocuMgrComponent;
  let fixture: ComponentFixture<DocuMgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocuMgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocuMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
