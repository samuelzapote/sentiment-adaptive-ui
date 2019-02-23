import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSceneComponent } from './load-scene.component';

describe('LoadSceneComponent', () => {
  let component: LoadSceneComponent;
  let fixture: ComponentFixture<LoadSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
