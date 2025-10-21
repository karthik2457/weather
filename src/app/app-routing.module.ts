import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowWeatherInfoComponent } from './show-weather-info/show-weather-info.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'ShowWeatherInfo', pathMatch: 'full' },
  // { path: 'home', component: StdHomeComponent }, redirectTo
   { path: 'ShowWeatherInfo', component: ShowWeatherInfoComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
