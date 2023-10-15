import { Component, OnInit } from '@angular/core';
import { ApiHistoryService } from '../services/api-history.service';

@Component({
  selector: 'app-api-history',
  templateUrl: './api-history.component.html',
  styleUrls: ['./api-history.component.css']
})
export class ApiHistoryComponent implements OnInit {

  apiHistory: string[];

  constructor(private apiHistoryService: ApiHistoryService) { 
    this.apiHistory = [];
  }

  ngOnInit() {
    this.apiHistory = this.apiHistoryService.getApiHistory();
  }

}
