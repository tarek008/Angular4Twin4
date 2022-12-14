import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../src/environments/environment';
import { Department } from '../model/department';
import { etudiants } from '../model/etudiants';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  public url_apilist = environment.url;
  getallquery = 'DisplayStudents';
  filter = 'existenceByName/';
  affectedepst = 'assignetudianttodepartment/';
  constructor(private httpClient: HttpClient) {
    console.log(this.url_apilist);

  }
  getEtudiantsListe(): Observable<etudiants[]> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<etudiants[]>(`${this.url_apilist + this.getallquery}`, { "headers": headers });
  }
  geEtudiantById(id: number): Observable<etudiants> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<etudiants>(this.url_apilist + 'DisplayEtudiantById/' + id, { "headers": headers });
  }
  getEtudiantFiltredbyname(name: String): Observable<etudiants[]> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<etudiants[]>(`${this.url_apilist + this.filter + name}`, { "headers": headers });
  }
  getEtudiantByDepartment(id: number): Observable<etudiants[]> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<etudiants[]>(`${'https://d992-197-25-231-103.eu.ngrok.io/SpringMVC/DepartmentController/GetListOfEtudiantsByDepartment/' + id}`, { "headers": headers });
  }
  addEtudiant(e: etudiants) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post(this.url_apilist + 'ajouterEtudiant', e, { "headers": headers })
  }
  updateEtudiant(e: etudiants) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.put(this.url_apilist + 'updateStudentById', e, { "headers": headers })
  }
  deleteEtudiantByID(id: number) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.delete(this.url_apilist + 'deletestudent/' + id, { "headers": headers });
    console.log(id);
  }
  getDepartments(): Observable<Department[]> {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<Department[]>(`${'https://d992-197-25-231-103.eu.ngrok.io/SpringMVC/DepartmentController/displayalldepartment'}`, { "headers": headers });
  }
  affecterEtudiantToDepartment(iddep: number, ids: number) {
    const headers = new HttpHeaders()

      .set('content-type', 'application/json')
      .set('ngrok-skip-browser-warning', '1231')

      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.put<any>(this.url_apilist + this.affectedepst + ids + '/' + iddep, {}, { "headers": headers });
  }
}