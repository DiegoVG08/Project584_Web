import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { enviroment } from '../enviroment/enviroment';



export interface ContactComponent {
  DealershipID: number;
    name: string;
    location: string;
    contactInfo: number;
   

}

@Component({
  selector: 'app-home',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public displayedColumns: string[] = ['dealershipID', 'name', 'location', 'contactInfo' ];
  public contact!: MatTableDataSource<ContactComponent>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public ContactComponent: ContactComponent [] = [];
  baseurl = 'https://localhost:7173/api/Dealer' ;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<ContactComponent[]>(this.baseurl).subscribe(result => {
      this.ContactComponent = result;
      this.contact = new MatTableDataSource<ContactComponent>(result);
      this.contact.paginator = this.paginator;
    }, error => console.error(error));
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.ContactComponent.length) {
      endIndex = this.ContactComponent.length;
    }
    this.contact.data = this.ContactComponent.slice(startIndex, endIndex);
  }
}
