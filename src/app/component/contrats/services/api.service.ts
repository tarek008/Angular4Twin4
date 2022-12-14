import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IArchivePercentType } from '../Model/ArchivePercentType';
import { Student } from '../Model/student';
import { map } from 'rxjs/operators';
import { Contrat } from '../Model/Contrat';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url = environment.urlCont + '/ContartController/';
  public urlAff = this.url + 'displayallcontrats/';
  public urlAdd = this.url + 'newContrat';
  public urlUpdate = this.url + 'updateContrat/';
  public urlDel = this.url + 'deleteContrat/';
  public urlACTS = this.url + 'assignContratToEtudiantByID/';
  public urlAffStudent = environment.urlCont + '/controllerEtudiant/DisplayStudents';
  public urlexport = this.url + 'export/pdf';
  public urlReduction = this.url + "contratReduction"
  public urlTwoDate = this.url + "getContratsBetween/";


  constructor(private http: HttpClient) {



  }




  postContrat(data: any) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    //return this.http.post<any>("http://localhost:3000/listContrats/", data)
    return this.http.post<any>(this.urlAdd, data, { "headers": headers })

  }
  getContrat() {

    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');


    //return this.http.get<any>("http://localhost:3000/listContrats/")
    return this.http.get<any>(this.urlAff, { "headers": headers });
  }
  //  updateContrat(data: any, id: number) {
  //return this.http.get<any>("http://localhost:3000/listContrats/")
  //  return this.http.put<any>(this.urlUpdate + id, data);
  //}
  updateContrat(data: any) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.http.put<any>(this.urlUpdate, data, { "headers": headers });
  }

  DelContrat(id: number) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    //return this.http.get<any>("http://localhost:3000/listContrats/")
    return this.http.delete<any>(this.urlDel + id, { "headers": headers });
  }
  AddContratToStudent(idC: number, idE: number) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.http.put<any>(this.urlACTS + idC + '/' + idE, {}, { "headers": headers });

  }

  getStudents() {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.http.get<Student[]>(this.urlAffStudent, { "headers": headers });
  }

  exportPdfContrats(): Observable<Blob> {
    return this.http.get(this.urlexport, { responseType: 'blob' });
  }

  // ContratArchiveStats
  getStats(): Observable<Array<IArchivePercentType>> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.http
      .get<Array<IArchivePercentType>>(
        'https://d992-197-25-231-103.eu.ngrok.io/SpringMVC/ContartController/vData/percentArchiveStatus'
      )
      .pipe(map((d: Array<IArchivePercentType>) => d, { "headers": headers }));
  }


  Makereduction() {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.http.put<any>(this.urlReduction, [], { "headers": headers });
  }

  ContratBetweenTwoDate(DateDebut: String, DateFin: String) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');

    return this.http.get<Contrat[]>(this.urlTwoDate + DateDebut + "/" + DateFin, { "headers": headers });

  }



}
