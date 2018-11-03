import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  public api = "http://localhost:2000/api/message"

  constructor(private http: HttpClient) { }

  submitMessage(msg: string, ctx: any): Observable<any> {
    var payload = {
      input: { "text": msg } || {},
      context: ctx || {}
    };
    return this.http.post(this.api, payload, httpOptions);
  }
}
