import {Component, signal } from '@angular/core';
import {WeatherService} from '../weather.service'
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ShowInfoDialogComponent } from '../mat-dialog/show-info-dialog/show-info-dialog.component';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-show-weather-info',
  templateUrl: './show-weather-info.component.html',
  styleUrls: ['./show-weather-info.component.scss'],
  
 
})
export class ShowWeatherInfoComponent {
  formatter = new Intl.DateTimeFormat('en-US', {dateStyle: 'medium', });
  math = Math;
  location:any = "000000"
  noOfDays:number = 0;
  isfilter:boolean = true;
  isShowWeatherInfo : boolean = true
  weatherInputGroup: FormGroup | any;
  weatherResponse : any = []
  upAngle: any = "▲";
  downAngle: any = "▼";
  showIcon : any = this.downAngle;
  showandHideCalss : string = "d-none"
  panelOpenState = false;
  cityInfo : any = {}
  response : any = {}
  weatherDateWiseMap = {}
  // removeDuplicatesArrayByDate: number = [];
  iconUrl: string = "";
  

  


  constructor(
    private ws : WeatherService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog
  ){}
  ngOnInit() {
    //this.openDialogBox("deepas Babu")
    this.weatherInputGroup = this.formBuilder.group({
      CityName : ['', Validators.required],
      NoOfDays : ['', Validators.required]
    })
  }

  dateCOnvert() {
    return "22/07/1993";
  }

  openDialogBox(message:string) {
    this.matDialog.open(ShowInfoDialogComponent, {
      data : {
       "message" : message},
    });
  }

  weatherInfoMap(weatherArr :any) {
    
  }

  getUniqueListBy(arr :any, key:string) {
    const weatherMap :any = {};
    arr.forEach((element :any) => { 
      weatherMap[element[key].split(" ")[0]] = element
    });

    this.weatherResponse = Object.values(weatherMap)
  }

  getWeatherInfo() {
    this.isfilter = false
    this.isShowWeatherInfo = false
    const regexString = /^[a-zA-Z]+$/;
    const regexNumber = /^\d+$/;
    ;
    const foromData = this.weatherInputGroup.value
    console.log("foromData ", foromData)
    const CityName = foromData['CityName']
    let daysInfo = foromData['NoOfDays']
    if (CityName == "" ) {
      this.openDialogBox('City Name is empty')
      console.log("City Name is empty");
      this.isfilter = true
      return;
    } 
    if(daysInfo == undefined || daysInfo == ""){
      console.log("Select No Of Days");
      this.openDialogBox('Select No Of Days')
      this.isfilter = true
      return;
    }

    this.location = CityName
    this.noOfDays = daysInfo
    
    


    if ( (regexNumber.test(CityName) && CityName.length == 6) || regexString.test(CityName)) {
      console.log("valid city or zip code")
      this.ws.getWatherPast5Days(this.location, this.noOfDays).subscribe(data => {
        this.isShowWeatherInfo = true
        ///this.isShowWeatherInfo = data.body
        this.response = data;
        this.getUniqueListBy(data['list'], "dt_txt")
        //this.weatherResponse = data['list']
        this.cityInfo = data['city']

        // const iconCode = this.weatherResponse.weather[0].icon;
        // this.iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        


        console.log(data)
      },  
      (error) => {
        console.log("error", error)
        this.openDialogBox("Invalid Intput!. Please Try Again Valid Input")
        this.isfilter = true
       
      }
    );
    } else {
      this.openDialogBox("invalid intput!. Please try again valid input")
      this.isfilter = true
      console.log("invalid intput!. Please try again valid input")
    }


    
  }


  changeIcon() {
    console.log("this.showIcon before", this.showIcon)
    this.showIcon= (this.showIcon =="▲") ? this.downAngle :  this.upAngle
    this.showandHideCalss = (this.showandHideCalss == "d-none") ?  "" : "d-none"
    console.log("this.showIcon after", this.showIcon)
    
  }

  

  
}