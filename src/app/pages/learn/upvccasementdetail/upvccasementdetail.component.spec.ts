import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvccasementdetailComponent } from './upvccasementdetail.component';

describe('UpvccasementdetailComponent', () => {
  let component: UpvccasementdetailComponent;
  let fixture: ComponentFixture<UpvccasementdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpvccasementdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpvccasementdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
