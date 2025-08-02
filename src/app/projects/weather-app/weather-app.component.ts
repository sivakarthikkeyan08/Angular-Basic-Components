// src/app/projects/weather-app/weather-app.component.ts

import { Component } from '@angular/core';
import { WeatherService } from '../weather.service'; // <-- Import your WeatherService

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent {
  // Property to hold the user's input for the city.
  city: string = '';

  // Property to store the fetched weather data. 'any' for simplicity, could be an interface.
  weatherData: any;

  // Property to store error messages, if any.
  errorMessage: string | null = null;

  // WeatherService is injected into the constructor, similar to HttpClient in the service.
  constructor(private weatherService: WeatherService) { }

  /**
   * Fetches weather data when the user clicks the button.
   */
  getWeather(): void {
    // Reset previous error message
    this.errorMessage = null;

    // Check if city input is empty
    if (!this.city) {
      this.errorMessage = 'Please enter a city name.';
      this.weatherData = null; // Clear previous weather data
      return; // Stop execution
    }

    // Call the getWeather method from the WeatherService.
    // The .subscribe() method is crucial: it executes the Observable and
    // receives the data (or error) when the API call completes.
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => { // This block runs if the API call is successful
        this.weatherData = data;
        console.log('Weather data received:', data); // Log the full response for debugging
      },
      error: (error) => { // This block runs if the API call fails
        console.error('Error fetching weather data:', error);
        // Provide a user-friendly error message based on the API response structure
        if (error.status === 404) {
          this.errorMessage = `City not found: "${this.city}". Please check the spelling.`;
        } else if (error.error && error.error.message) {
          this.errorMessage = `Error: ${error.error.message}`;
        } else {
          this.errorMessage = 'An unexpected error occurred. Please try again later.';
        }
        this.weatherData = null; // Clear previous weather data on error
      }
    });
  }
}
