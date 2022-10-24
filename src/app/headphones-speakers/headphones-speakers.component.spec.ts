import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphonesSpeakersComponent } from './headphones-speakers.component';

describe('HeadphonesSpeakersComponent', () => {
  let component: HeadphonesSpeakersComponent;
  let fixture: ComponentFixture<HeadphonesSpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadphonesSpeakersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadphonesSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
