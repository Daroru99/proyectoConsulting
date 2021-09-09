import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http: HttpClient) { 
  }
  getData(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`https://api-dev.vigpro.com/api/actuaciones-prueba`, { headers: headers });
  }

  
}
