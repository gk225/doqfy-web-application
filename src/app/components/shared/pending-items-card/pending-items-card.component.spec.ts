import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingItemsCardComponent } from './pending-items-card.component';

describe('PendingItemsCardComponent', () => {
  let component: PendingItemsCardComponent;
  let fixture: ComponentFixture<PendingItemsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingItemsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingItemsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
