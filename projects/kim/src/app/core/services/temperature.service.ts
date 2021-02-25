import { Injectable } from '@angular/core';
import { TemperatureUnit } from '../enums/temperature.unit';

@Injectable({
    providedIn: 'root'
})
export class TemperatureService {
    private DEFUALT_CELCIUS_UNIT = TemperatureUnit.celcius;
    temperatureUnit = this.DEFUALT_CELCIUS_UNIT;

    constructor() { }

    convertTemperatureUnit(): void {
        this.temperatureUnit = this.temperatureUnit === TemperatureUnit.celcius ?
            TemperatureUnit.fahrenheit : TemperatureUnit.celcius;
    }
}
