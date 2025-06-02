import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvcswingnslidedetailsComponent } from './upvcswingnslidedetails.component';

describe('UpvcswingnslidedetailsComponent', () => {
  let component: UpvcswingnslidedetailsComponent;
  let fixture: ComponentFixture<UpvcswingnslidedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpvcswingnslidedetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpvcswingnslidedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
