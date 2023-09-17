import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrylicLayoutComponent } from './acrylic-layout.component';

describe('AcrylicLayoutComponent', () => {
  let component: AcrylicLayoutComponent;
  let fixture: ComponentFixture<AcrylicLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcrylicLayoutComponent]
    });
    fixture = TestBed.createComponent(AcrylicLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
