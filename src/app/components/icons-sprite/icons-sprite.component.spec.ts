import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSpriteComponent } from './icons-sprite.component';

describe('IconsSpriteComponent', () => {
  let component: IconsSpriteComponent;
  let fixture: ComponentFixture<IconsSpriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconsSpriteComponent]
    });
    fixture = TestBed.createComponent(IconsSpriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
