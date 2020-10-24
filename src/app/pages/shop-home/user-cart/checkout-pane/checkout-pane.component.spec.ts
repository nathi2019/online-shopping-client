import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPaneComponent } from './checkout-pane.component';

describe('CheckoutPaneComponent', () => {
  let component: CheckoutPaneComponent;
  let fixture: ComponentFixture<CheckoutPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
