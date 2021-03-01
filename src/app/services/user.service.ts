import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = `${environment.api}users/`

  constructor(private _http: HttpClient) { }

  fetchUser = () => { return this._http.get(`${this.url}`).toPromise() }
  fetchPacients = () => { return this._http.get(`${this.url}pacient`).toPromise() }
  fetchAdministrators = () => { return this._http.get(`${this.url}admin`).toPromise() }

  getUserById = (id) => { return this._http.get(`${this.url}${id}`).toPromise() }

  signin = (user) => { return this._http.post(`${this.url}login`, user).toPromise() }
  signup = (user) => { return this._http.post(`${this.url}`, user).toPromise() }

}
