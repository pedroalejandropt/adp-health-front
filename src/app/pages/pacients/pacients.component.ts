import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pacients',
  templateUrl: './pacients.component.html',
  styleUrls: ['./pacients.component.scss']
})
export class PacientsComponent implements OnInit {

  title: string = 'List of Pacients';
  header: any = {'actions': 'Actions', 'firstName': 'First Name', 'firstLastName': 'Last Name', 'email': 'Mail'}

  pacients: any[] = [];

  record: any = null;

  actions: Action[] = []

  loading: boolean = true;

  constructor(
    private _userservice: UserService, 
    private _appoinmentservice: AppointmentService
    ) { }

  ngOnInit() {
    this.actions = [
      { icon: 'assignment', tooltip: 'Add Appointment', action: (record) => this.addAppointment(record) }]

    this.fetchUsers();
  }

  fetchUsers = () => this._userservice.fetchPacients().then((res: any) => { this.pacients = res; this.loading = false })

  addAppointment = (record) => { 
    this.record = record; 
    this.record['function'] = (appointment) => this._appoinmentservice.addAppointment(appointment);
  }
  
}

export interface Action {
  icon: string;
  tooltip: string;
  action: Function;
}
