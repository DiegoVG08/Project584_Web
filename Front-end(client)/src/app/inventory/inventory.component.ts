import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { enviroment } from '../enviroment/enviroment';
import { inventory } from './inventory';



@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})

export class inventoryComponent implements OnInit {
  public displayedColumns: string[] = ['vehicleTypeID', 'make', 'model', 'year'];
  public inventory!: MatTableDataSource<inventory>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public InventoryComponent: inventory [] = [];
  baseurl = 'https://localhost:7173/api/VehicleType';
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<inventory[]>(this.baseurl).subscribe(result => {
      this.InventoryComponent = result;
      this.inventory = new MatTableDataSource<inventory>(result);
      this.inventory.paginator = this.paginator;
    }, error => console.error(error));
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.InventoryComponent.length) {
      endIndex = this.InventoryComponent.length;
    }
    this.inventory.data = this.InventoryComponent.slice(startIndex, endIndex);
  }
}