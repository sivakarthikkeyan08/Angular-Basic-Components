import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyConverterComponent } from './projects/currency-converter/currency-converter.component';

const routes: Routes = [
  { path: '', component: CurrencyConverterComponent },  // Default route
  { path: 'currency-converter', component: CurrencyConverterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
