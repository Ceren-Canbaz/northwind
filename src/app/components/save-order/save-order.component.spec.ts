import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveOrderComponent } from './save-order.component';

describe('SaveOrderComponent', () => {
  let component: SaveOrderComponent;
  let fixture: ComponentFixture<SaveOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
