import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/kim/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(path: string, params?: HttpParams): Observable<any> {
    return (params) ?
      this.http.get(`${environment.api_url}${path}`, { params }) :
      this.http.get(`${environment.api_url}${path}`);
  }
}
