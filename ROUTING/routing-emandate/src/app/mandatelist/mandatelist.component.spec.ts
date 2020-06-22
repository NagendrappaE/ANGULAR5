import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandatelistComponent } from './mandatelist.component';

describe('MandatelistComponent', () => {
  let component: MandatelistComponent;
  let fixture: ComponentFixture<MandatelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandatelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
