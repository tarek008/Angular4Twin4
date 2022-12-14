import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  public url_apilist = environment.url;

  constructor(private http: HttpClient) {

  }

  getEtudiantsAges(): Observable<number[]> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.http.get<number[]>(`${this.url_apilist + 'getAllEtudiantsAges'}`, { "headers": headers })
  }
}
