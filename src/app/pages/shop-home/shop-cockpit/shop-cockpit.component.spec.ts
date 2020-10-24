import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCockpitComponent } from './shop-cockpit.component';

describe('ShopCockpitComponent', () => {
  let component: ShopCockpitComponent;
  let fixture: ComponentFixture<ShopCockpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopCockpitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
