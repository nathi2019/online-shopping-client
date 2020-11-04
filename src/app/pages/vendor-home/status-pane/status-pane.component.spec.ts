import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPaneComponent } from './status-pane.component';

describe('StatusPaneComponent', () => {
  let component: StatusPaneComponent;
  let fixture: ComponentFixture<StatusPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
