import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWeatherInfoComponent } from './show-weather-info.component';

describe('ShowWeatherInfoComponent', () => {
  let component: ShowWeatherInfoComponent;
  let fixture: ComponentFixture<ShowWeatherInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowWeatherInfoComponent]
    });
    fixture = TestBed.createComponent(ShowWeatherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
