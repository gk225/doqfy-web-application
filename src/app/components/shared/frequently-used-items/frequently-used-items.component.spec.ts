import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyUsedItemsComponent } from './frequently-used-items.component';

describe('FrequentlyUsedItemsComponent', () => {
  let component: FrequentlyUsedItemsComponent;
  let fixture: ComponentFixture<FrequentlyUsedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequentlyUsedItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentlyUsedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges() ;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
