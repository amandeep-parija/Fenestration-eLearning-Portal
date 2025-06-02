import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvcslidingdetailsComponent } from './upvcslidingdetails.component';

describe('UpvcslidingdetailsComponent', () => {
  let component: UpvcslidingdetailsComponent;
  let fixture: ComponentFixture<UpvcslidingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpvcslidingdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpvcslidingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
