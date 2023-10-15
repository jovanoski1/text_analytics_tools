import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageDetectionResult } from '../model';
import { ApiHistoryService } from './api-history.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  constructor(private http: HttpClient, private apiHistory: ApiHistoryService) { }

  public detectLanguage(text: string, clean: boolean): Observable<LanguageDetectionResult> {
    const url = 'https://api.dandelion.eu/datatxt/li/v1/?text=' + text + '&clean=' + clean + '&token=' + localStorage.getItem('token');
    this.apiHistory.addApiToHistory(url);
    return this.http.get<LanguageDetectionResult>(url);
  }
}
