import { Component, OnInit } from '@angular/core';
import { TemperatureUnit } from '../core/enums';
import { TemperatureService } from '../core/services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  isFahrenheit: boolean;
  constructor(private temperatureService: TemperatureService) { }

  ngOnInit(): void {
    this.isFahrenheit = this.temperatureService.temperatureUnit === TemperatureUnit.fahrenheit;
  }

  clickTemperatureUnitToggle(): void {
    this.temperatureService.convertTemperatureUnit();
  }
}
