import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/account.service';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.component.html',
  styleUrls: ['./passbook.component.css']
})
export class PassbookComponent implements OnInit {
  accountNumber: string;
  transactions: Transaction[];

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.accountNumber = params['accountNumber'];
      this.loadTransactions();
    });
  }

  loadTransactions(): void {
    this.accountService.getPassbook(this.accountNumber)
      .subscribe(
        (transactions) => {
          this.transactions = transactions;
        },
        (error) => {
          console.error('Error loading transactions', error);
        }
      );
  }
}
