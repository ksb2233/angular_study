import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Weather } from '../core/models';
import { CityService } from '../core/services/city.service';
import { WeatherService } from '../core/services/weather.service';

@Injectable({
    providedIn: 'root'
})
export class WeatherResolver implements Resolve<Weather> {
    constructor(
        private cityService: CityService,
        private weatherService: WeatherService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Weather> {
        return this.weatherService
            .fetchWeather(this.cityService.getCurrentLocationId())
            .pipe(take(1));
    }
}
