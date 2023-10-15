import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TextSimilarityResult } from '../model';
import { ApiHistoryService } from './api-history.service';

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  constructor(private http: HttpClient, private apiHistory: ApiHistoryService) { }

  public calculateSimilarity(text1: string, text2: string): Observable<TextSimilarityResult> {
    const url = 'https://api.dandelion.eu/datatxt/sim/v1/?text1=' + text1 + '&text2=' + text2 + '&token=' + localStorage.getItem('token');
    this.apiHistory.addApiToHistory(url);
    return this.http.get<TextSimilarityResult>(url);
  }
}
