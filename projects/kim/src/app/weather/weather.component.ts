import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
import { Weather } from '../core/models';
import { CityService, WeatherService } from '../core/services';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather$: Observable<Weather>;

  constructor(
    private weatherService: WeatherService,
    private cityService: CityService
  ) { }

  ngOnInit(): void {
    this.weather$ = this.cityService.city$.pipe(
      filter(city => city !== null),
      mergeMap(city => {
        return this.weatherService.fetchWeather(city.woeid);
      })
    );
  }
}
