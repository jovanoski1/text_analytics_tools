import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityExtractionResult } from '../model';
import { ApiHistoryService } from './api-history.service';

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {

  constructor(private http: HttpClient, private apiHistory: ApiHistoryService) { }

  public extractEntities(text: string, include: any, minConfidence: number): Observable<EntityExtractionResult> {
    const includeOpt = Object.keys(include).filter(key => include[key]).join(',');
    const url = 'https://api.dandelion.eu/datatxt/nex/v1/?lang=en&text=' 
    + text + '&include=' + includeOpt + '&token=' + localStorage.getItem('token');
    this.apiHistory.addApiToHistory(url);
    return this.http.get<EntityExtractionResult>(url);
  }
}
