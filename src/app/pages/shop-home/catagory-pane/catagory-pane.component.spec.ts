import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryPaneComponent } from './catagory-pane.component';

describe('CatagoryPaneComponent', () => {
  let component: CatagoryPaneComponent;
  let fixture: ComponentFixture<CatagoryPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoryPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
