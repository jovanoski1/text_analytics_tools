import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SentimentAnalysisResult } from '../model';
import { ApiHistoryService } from './api-history.service';

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  constructor(private http: HttpClient, private apiHistory: ApiHistoryService) { }

  public analyzeSentiment(text: string, lang: string): Observable<SentimentAnalysisResult> {
    const url = 'https://api.dandelion.eu/datatxt/sent/v1/?text=' + text + '&lang='+ lang + '&token=' + localStorage.getItem('token');
    this.apiHistory.addApiToHistory(url);
    return this.http.get<SentimentAnalysisResult>(url);
  }
}
