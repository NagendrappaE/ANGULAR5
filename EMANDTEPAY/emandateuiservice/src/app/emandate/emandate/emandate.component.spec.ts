import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmandateComponent } from './emandate.component';

describe('EmandateComponent', () => {
  let component: EmandateComponent;
  let fixture: ComponentFixture<EmandateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmandateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmandateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
