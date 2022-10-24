import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalExternalCoolingFansComponent } from './internal-external-cooling-fans.component';

describe('InternalExternalCoolingFansComponent', () => {
  let component: InternalExternalCoolingFansComponent;
  let fixture: ComponentFixture<InternalExternalCoolingFansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalExternalCoolingFansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalExternalCoolingFansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
