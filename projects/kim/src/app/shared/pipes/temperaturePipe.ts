import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureUnit } from '../../core/enums';
import { TemperatureService } from '../../core/services/temperature.service';

@Pipe({ name: 'temperature' })
export class TemperaturePipe implements PipeTransform {

    constructor(private temperatureService: TemperatureService) { }

    transform(temperatureValue: number): string {
        if (this.temperatureService.temperatureUnit === TemperatureUnit.fahrenheit) {
            temperatureValue = temperatureValue * 9 / 5 + 32;
        }
        return this.roundingTemperature(temperatureValue) + this.temperatureService.temperatureUnit;
    }

    private roundingTemperature(temperatureValue: number): number {
        return Math.round(temperatureValue * 10) / 10;
    }
}
