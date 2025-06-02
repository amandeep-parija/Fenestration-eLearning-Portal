import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvcmonoraildetailsComponent } from './upvcmonoraildetails.component';

describe('UpvcmonoraildetailsComponent', () => {
  let component: UpvcmonoraildetailsComponent;
  let fixture: ComponentFixture<UpvcmonoraildetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpvcmonoraildetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpvcmonoraildetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
