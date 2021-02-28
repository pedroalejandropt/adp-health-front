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
  getUserById = (id) => { return this._http.get(`${this.url}${id}`).toPromise() }

}
