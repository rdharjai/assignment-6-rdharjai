import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StareventComponent } from './starevent.component';

describe('StareventComponent', () => {
  let component: StareventComponent;
  let fixture: ComponentFixture<StareventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StareventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StareventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
