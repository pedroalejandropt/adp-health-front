import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  title: string = 'List of Appointments';
  header: any = {'actions': 'Actions', 'firstName': 'Name', 'firstLastName': 'Last Name', 'date': 'Date', 'state': 'State' }

  appointments: any[] = [];

  record: any = null;
  form: string = '';

  actions: Action[] = []

  loading: boolean = true;

  constructor(
    private _userservice: UserService, 
    private _appoinmentservice: AppointmentService
    ) { }

  ngOnInit() {
    this.actions = [
      { icon: 'visibility', tooltip: 'View Appointment', action: (record) => this.detailAppointment(record) },
      { icon: 'edit', tooltip: 'Edit Appointment', action: (record) => this.editAppointment(record) }]

    this.fetchAppointments();
  }

  fetchAppointments = () => 
    this._appoinmentservice.fetchAppointments().then((res: any) => { 
      this.appointments = res.map((appointment) => { 
        appointment['firstName']= appointment.user.firstName;
        appointment['firstLastName']= appointment.user.firstLastName;
        appointment['email']= appointment.user.email;
        return appointment;
    });
      this.loading = false 
    })

  editAppointment = async (record) => { 
    this.form = 'edit';
    this.record = record;
    this.record['function'] = (appointment) => this._appoinmentservice.editAppointment(appointment.id, appointment);
  }

  detailAppointment = (record) => {
    this.form = 'detail';
    this.record = record;
  }

  
}

export interface Action {
  icon: string;
  tooltip: string;
  action: Function;
}
