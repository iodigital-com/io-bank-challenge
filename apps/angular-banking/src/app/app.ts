import { Component } from '@angular/core';
import { TransactionFormComponent } from './transaction-form/transaction-form';
import { TransactionHistoryComponent } from './transaction-history/transaction-history';

@Component({
  imports: [TransactionFormComponent, TransactionHistoryComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  
}
