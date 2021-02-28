import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  url: string = `${environment.api}appointments`;

  constructor(private _http: HttpClient) { }

  fetchAppointments = () => { return this._http.get(`${this.url}`).toPromise() }
  fetchAppointmentsByUser = (id) => { return this._http.get(`${this.url}/active/${id}`).toPromise() }
  
  addAppointment = (appointment) => { return this._http.post(`${this.url}`, appointment).toPromise() }
  editAppointment = (id, appointment) => { return this._http.put(`${this.url}/${id}`, appointment).toPromise() }

}
