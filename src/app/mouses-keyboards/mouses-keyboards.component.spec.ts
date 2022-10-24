import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MousesKeyboardsComponent } from './mouses-keyboards.component';

describe('MousesKeyboardsComponent', () => {
  let component: MousesKeyboardsComponent;
  let fixture: ComponentFixture<MousesKeyboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MousesKeyboardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MousesKeyboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
