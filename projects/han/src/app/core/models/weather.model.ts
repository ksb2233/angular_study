import { WeatherCondition } from '../enums';

export interface Weather {
    condition: WeatherCondition;
    formattedCondition: string;
    abbreviationCondition: string;
    temp: number;
    minTemp: number;
    maxTemp: number;
    locationId: number;
    lastUpdated: Date;
    location: string;
}
