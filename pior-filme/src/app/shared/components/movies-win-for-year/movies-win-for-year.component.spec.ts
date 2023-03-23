import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesWinForYearComponent } from './movies-win-for-year.component';

describe('MoviesWinForYearComponent', () => {
  let component: MoviesWinForYearComponent;
  let fixture: ComponentFixture<MoviesWinForYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesWinForYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesWinForYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
