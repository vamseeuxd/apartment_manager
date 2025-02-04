import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorsComponent } from './floors.component';

describe('FloorsComponent', () => {
  let component: FloorsComponent;
  let fixture: ComponentFixture<FloorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
