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
  header: any = {'actions': 'Actions', 'firstName': 'Name', 'firstLastName': 'Last Name', 'date': 'Date' }

  appointments: any[] = [];

  record: any = null;
  form: string = '';

  actions: Action[] = []

  loading: boolean = true;

  user: any = JSON.parse(localStorage.getItem('user'))

  constructor(
    private _userservice: UserService, 
    private _appoinmentservice: AppointmentService
    ) { }

  ngOnInit() {
    this.actions = (this.user.role.name == 'Admin') ? [
        { icon: 'visibility', tooltip: 'View Appointment', action: (record) => this.detailAppointment(record) },
        { icon: 'edit', tooltip: 'Edit Appointment', action: (record) => this.editAppointment(record) }] :
      [
        { icon: 'visibility', tooltip: 'View Appointment', action: (record) => this.detailAppointment(record) },
        { icon: 'check', tooltip: 'Complete Appointment', action: (record) => this.changeState(record) }]

    if (this.user.role.name == 'Admin') this.fetchAppointments(); else this.fetchAppointmentsById();
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

  fetchAppointmentsById = () => 
    this._appoinmentservice.fetchAppointmentsByUser(this.user.id).then((res: any) => { 
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

  changeState = async (record) => {
    this.record = await record;
    this.record.state = await false;
    await this._appoinmentservice.editAppointment(this.record.id, this.record);
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
