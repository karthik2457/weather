import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select'
import {MatExpansionModule} from '@angular/material/expansion'
import { MatDialogModule } from '@angular/material/dialog';
// new
// import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowWeatherInfoComponent } from './show-weather-info/show-weather-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowInfoDialogComponent } from './mat-dialog/show-info-dialog/show-info-dialog.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    ShowWeatherInfoComponent,
    ShowInfoDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatExpansionModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
