import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxMinProducersComponent } from './max-min-producers.component';

describe('MaxMinProducersComponent', () => {
  let component: MaxMinProducersComponent;
  let fixture: ComponentFixture<MaxMinProducersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxMinProducersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxMinProducersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
