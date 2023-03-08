import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent {
  //update this to Project name 
  //alternative way on using new implemantation 
public forecasts: WeatherForecast[] = [];
baseUrl = "https://localhost:7228/WeatherForecast";

constructor(http: HttpClient){
http.get<WeatherForecast[]>(this.baseUrl).subscribe(result =>
  this.forecasts = result);
} error = console.error();
}



interface WeatherForecast {
  data: string
  temperatureC: number;
  temperatureF: number;
  summary: number;

}