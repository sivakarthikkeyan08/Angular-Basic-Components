import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './projects/currency-converter/currency-converter.component';
import { FormsModule } from '@angular/forms';
import { WeatherAppComponent } from './projects/weather-app/weather-app.component';
import { HttpClientModule } from '@angular/common/http'; // <-- 1. IMPORT HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent,
    WeatherAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

