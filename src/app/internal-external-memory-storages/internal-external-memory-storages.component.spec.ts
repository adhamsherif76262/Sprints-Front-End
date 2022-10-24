import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalExternalMemoryStoragesComponent } from './internal-external-memory-storages.component';

describe('InternalExternalMemoryStoragesComponent', () => {
  let component: InternalExternalMemoryStoragesComponent;
  let fixture: ComponentFixture<InternalExternalMemoryStoragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalExternalMemoryStoragesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalExternalMemoryStoragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
