import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

  @Input() record: any;
  @Input() option: string;
  @Output() close = new EventEmitter<any>();

  dateAppointment: Date;
  description: string = '';

  constructor() { }

  ngOnInit() { }

  actionAppointment = () => {
    this.record['user'] = this.record.id;
    this.record.function(this.record).then((res: any) => { console.log(res); this.close.emit(); }, (error) => { console.log(error) }) ;
  }

  checkAppointment = () => {
    if (!this.record.description || !this.record.date ) return true; else return false;
  }

}
