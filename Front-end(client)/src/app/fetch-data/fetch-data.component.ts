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
public DealerInventory: Dealer[] = [];
baseUrl = 'https://localhost:7173/api/Dealer';

constructor(http: HttpClient){
http.get<Dealer[]>(this.baseUrl).subscribe(result =>
  this.DealerInventory = result);
} error = console.error();
}



interface Dealer {
 
  Price: number;
   Make: string;
  Model: string;
 
  

}