import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent {
public forecasts: WeatherForecast[] = [];
baseUrl = "https://localhost:7228";
//alternative way on using new implemantation 
constructor(http: HttpClient){
http.get<WeatherForecast[]>(this.baseUrl + 'weatherforecast').subscribe(result =>
  this.forecasts = result);
} error = console.error();
}



interface WeatherForecast {
  data: string
  temperatureC: number;
  temperatureF: number;
  summary: string;

}