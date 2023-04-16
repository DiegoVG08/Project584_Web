import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
//import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
//import {MatPaginatorModule} from '@angular/material/paginator'
//import { AboutComponent } from './about/about.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
//import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{  MatToolbarModule } from '@angular/material/toolbar';
import{ MatIconModule}from'@angular/material/icon';
import{ MatButtonModule}from'@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login.component';
import { AngularMaterialModule } from './angular-material.module';
import { inventoryComponent } from './inventory/inventory.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
   inventoryComponent,
   LoginComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCarouselModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,

 AngularMaterialModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
