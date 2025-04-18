import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {
  private apiUrl = 'http://localhost:8080/api/feedback'; 

  constructor(private http: HttpClient) {}

  enviarFormulario(dados: any): Observable<any> {
    return this.http.post(this.apiUrl, dados);
  }
}