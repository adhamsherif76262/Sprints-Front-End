import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardLaptopsComponent } from './standard-laptops.component';

describe('StandardLaptopsComponent', () => {
  let component: StandardLaptopsComponent;
  let fixture: ComponentFixture<StandardLaptopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardLaptopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
