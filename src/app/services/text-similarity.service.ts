import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TextSimilarityResult } from '../model';

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  constructor(private http: HttpClient) { }

  public calculateSimilarity(text1: string, text2: string): Observable<TextSimilarityResult> {
    const url = 'https://api.dandelion.eu/datatxt/sim/v1/?text1=' + text1 + '&text2=' + text2 + '&token=' + localStorage.getItem('token');
    return this.http.get<TextSimilarityResult>(url);
  }
}
