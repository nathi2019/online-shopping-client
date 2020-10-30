import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProductItemComponent } from './vendor-product-item.component';

describe('VendorProductItemComponent', () => {
  let component: VendorProductItemComponent;
  let fixture: ComponentFixture<VendorProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
