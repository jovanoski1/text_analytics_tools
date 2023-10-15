import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageDetectionResult } from '../model';

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  constructor(private http: HttpClient) { }

  public detectLanguage(text: string, clean: boolean): Observable<LanguageDetectionResult> {
    const url = 'https://api.dandelion.eu/datatxt/li/v1/?text=' + text + '&clean=' + clean + '&token=' + localStorage.getItem('token');

    return this.http.get<LanguageDetectionResult>(url);
  }
}
