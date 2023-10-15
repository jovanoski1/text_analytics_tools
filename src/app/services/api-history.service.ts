import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiHistoryService {

  private apiHistory: string[];

  constructor() { 
    this.apiHistory = [];
  }

  addApiToHistory(api: string) {
    const timestamp = new Date().toLocaleString();
    const entry = `[${timestamp}] ${api}`
    this.apiHistory.push(entry);
  }

  getApiHistory(): string[] {
    return this.apiHistory;
  }

  clearApiHistory() {
    this.apiHistory = [];
  }
}
