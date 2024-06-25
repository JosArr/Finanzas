import { Component } from '@angular/core';
import {Credit} from "../../models/models/credit";
import {CreditService} from "../../services/CreditService/credit.service";

@Component({
  selector: 'app-credit-view',
  templateUrl: './credit-view.component.html',
  styleUrls: ['./credit-view.component.css']
})
export class CreditViewComponent {
  credits: Credit[] = [];

  constructor(private creditService: CreditService) { }

  ngOnInit(): void {
    this.getCredits();
  }

  getCredits(): void {
    this.creditService.getCredits().subscribe((data: Credit[]) => {
      this.credits = data;
    });
  }
}
