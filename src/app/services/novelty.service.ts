import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoveltyService {

  url: string = `${environment.api}novelties/`;

  constructor(private _http: HttpClient) { }

  fetchNoveltiesById = (id) => { return this._http.get(`${this.url}appointment/${id}`).toPromise() }

  addNovelty = (novelty) => { return this._http.post(`${this.url}`, novelty).toPromise() }
  editNovelty = (id, novelty) => { return this._http.post(`${this.url}/${id}`, novelty).toPromise() }
  
}
