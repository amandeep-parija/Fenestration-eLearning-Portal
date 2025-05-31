import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvcComponent } from './upvc.component';

describe('UpvcComponent', () => {
  let component: UpvcComponent;
  let fixture: ComponentFixture<UpvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpvcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
