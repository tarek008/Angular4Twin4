import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Universite } from "../model/universite";

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  public url_list = environment.url_u;
  public univ: Universite;
  getalluniversities = 'displayUniversities'
  constructor(private httpClient: HttpClient) {
  }
  getlistuniversities(): Observable<Universite[]> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<Universite[]>(`${this.url_list + this.getalluniversities}`, { "headers": headers });
  }

  getUniversityById(id: number): Observable<Universite> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<Universite>(this.url_list + 'displayUniversityBYId/' + id, { "headers": headers });
  }

  addUniversite(univ: Universite) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post(this.url_list + 'addUniversity', univ, { "headers": headers })
  }
  updateUniversite(univ: Universite) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.put(this.url_list + 'updateUniversity', univ, { "headers": headers })
  }
  addDep(iduniv: number, iddep: number) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    // @ts-ignore
    return this.httpClient.put(this.url_list + 'assignuniversityToDepartment/' + iduniv + '/' + iddep, { "headers": headers });

  }
  univDelete(iduniv: number) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    // @ts-ignore
    return this.httpClient.delete(this.url_list + 'deleteUniv/' + iduniv, { "headers": headers });

  }
  private univUp = new BehaviorSubject({} as Universite);
  univUp$ = this.univUp.asObservable();
  assignUniv(univUp: any) {
    this.univUp.next(univUp);
  }

}

