import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractSessionComponent } from './interact-session.component';

describe('InteractSessionComponent', () => {
  let component: InteractSessionComponent;
  let fixture: ComponentFixture<InteractSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
