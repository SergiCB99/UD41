import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Superheroe } from '../models/superheroe.model';

const baseUrl = 'http://localhost:3000/superheroes';

@Injectable({
  providedIn: 'root'
})
export class SuperheroeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Superheroe[]> {
    return this.http.get<Superheroe[]>(baseUrl);
  }

  get(id: any): Observable<Superheroe> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Superheroe[]> {
    return this.http.get<Superheroe[]>(`${baseUrl}?name=${name}`);
  }

}
