import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualButtonComponent } from './visual-button.component';

describe('VisualButtonComponent', () => {
  let component: VisualButtonComponent;
  let fixture: ComponentFixture<VisualButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
