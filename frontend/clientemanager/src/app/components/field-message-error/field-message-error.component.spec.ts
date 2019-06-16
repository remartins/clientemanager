import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldMessageErrorComponent } from './field-message-error.component';

describe('FieldMessageErrorComponent', () => {
  let component: FieldMessageErrorComponent;
  let fixture: ComponentFixture<FieldMessageErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldMessageErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldMessageErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
