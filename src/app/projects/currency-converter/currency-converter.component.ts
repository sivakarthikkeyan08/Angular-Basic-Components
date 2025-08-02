import { Component } from '@angular/core';


@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {
  // --- Component Properties ---

  // Property to hold the amount to be converted. Initialized to 1.
  amount: number = 1;

  // Property to hold the selected 'from' currency. Initialized to 'USD'.
  fromCurrency: string = 'USD';

  // Property to hold the selected 'to' currency. Initialized to 'INR'.
  toCurrency: string = 'INR';

  // Property to store the final converted amount.
  convertedAmount: number | null = null;

  // A list of available currencies for the dropdowns.
  currencies: string[] = ['USD', 'EUR', 'GBP', 'INR'];

  // Hard-coded exchange rates (relative to USD).
  // In a real app, you would fetch these from an API.
  exchangeRates: { [key: string]: number } = {
    'USD': 1,      // Base currency
    'EUR': 0.92,   // 1 USD = 0.92 EUR
    'GBP': 0.79,   // 1 USD = 0.79 GBP
    'INR': 83.35,  // 1 USD = 83.35 INR
  };

  // --- Component Method ---

  // This method is called when the user clicks the 'Convert' button.
  convert(): void {
    // 1. Get the exchange rate for the 'from' currency.
    const fromRate = this.exchangeRates[this.fromCurrency];
    
    // 2. Get the exchange rate for the 'to' currency.
    const toRate = this.exchangeRates[this.toCurrency];

    // 3. First, convert the input amount to the base currency (USD).
    const amountInUsd = this.amount / fromRate;

    // 4. Then, convert the amount from USD to the target currency.
    this.convertedAmount = amountInUsd * toRate;
  }
}
// This component allows users to convert an amount from one currency to another.

