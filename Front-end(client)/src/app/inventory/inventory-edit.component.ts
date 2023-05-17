import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { enviroment } from '../enviroment/enviroment';
import { inventory } from './inventory';

@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.scss']
})
export class InventoryEditComponent implements OnInit{

  // the view title
  title?: string;

  // the form model
  form!: FormGroup;

  
  EditInventory?: inventory;

  id?: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      make: new FormControl('',Validators.required),
      model: new FormControl('',Validators.required),
      year: new FormControl('',Validators.required)
    });

    this.loadData();
  }

  loadData() {

    // retrieve the ID from the 'id' parameter
    var idParam = this.activatedRoute.snapshot.paramMap.get('id');
     this.id = idParam ? +idParam : 0;
    if (this.id) {

    // fetch the city from the server
    var baseurl = 'https://localhost:7173/api/VehicleType' + this.id;
    this.http.get<inventory>(baseurl).subscribe(result => {
      this.EditInventory = result;
      //doesnt work currently 
     // this.title = "Edit -  " + this.EditInventory.make ;

      // update the form with the new value
      this.form.patchValue(this.EditInventory);
    }, error => console.error(error));
  }
  else {
    // ADD NEW MODE
    this.title = "Add a new vehicle to the inventory";
  }
}

  onSubmit() {
    
    var newData = (this.id) ? this.form.value: <inventory>{};
    if (newData) {
      newData.make = this.form.controls['make'].value;
      newData.model = this.form.controls['model'].value;
      newData.year = +this.form.controls['year'].value;

      if (this.id) {
      var baseurl = 'https://localhost:7173/api/VehicleType' + newData.vehicleTypeID;
      this.http
        .put<inventory>(baseurl, newData)
        .subscribe(result => {

          console.log("VehicleType " + newData!.vehicleTypeID + " has been updated.");

          // go back to cities view
          this.router.navigate(['/inventory']);

        }, error => console.error(error));
    }
    else {
      // ADD NEW mode
      var baseurl = 'https://localhost:7173/api/VehicleType';
      this.http
        .post<inventory>(baseurl, newData)
        .subscribe(result => {
          console.log("VehicleType " + result.make + " has been created.");
          // go back to cities view
          this.router.navigate(['/inventory']);
        }, error => console.error(error));
    }
  }

  }
}




