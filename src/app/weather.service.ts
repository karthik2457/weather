import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private https : HttpClient
  ) { }

  getWatherPast5Days(location:any, noOfDays:number): Observable<any> {
    // b5f558462160da78810acd0bb997a9fd --> new
    //bc1301b0b23fe6ef52032a7e5bb70820 --> old'
    //cebcd482eda57fa9a6714c1c2ba91885'
    noOfDays = noOfDays * 5;
    //return this.https.get("https://api.openweathermap.org/data/2.5/forecast/daily?q="+location+"&cnt="+ noOfDays +"&units=metric&appid=b5f558462160da78810acd0bb997a9fd");
    return this.https.get("https://api.openweathermap.org/data/2.5/forecast?q="+ location +"&cnt="+ noOfDays +"&appid=abe1eb51289c21c167c66ce790c2fac3");
    //return this.https.get("https://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=abe1eb51289c21c167c66ce790c2fac3");
    
  }
}
