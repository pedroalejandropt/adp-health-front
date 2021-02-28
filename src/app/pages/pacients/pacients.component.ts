import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacients',
  templateUrl: './pacients.component.html',
  styleUrls: ['./pacients.component.scss']
})
export class PacientsComponent implements OnInit {

  title: string = 'List of Pacients';
  header: any = {'actions': 'Actions', 'firstName': 'First Name', 'firstLastName': 'Last Name', 'email': 'Mail'}

  pacients: any[] = [
    {firstName: 'Pedro', firstLastName: 'Pacheco', email: 'pp@gmail.com'},
    {firstName: 'Arturo', firstLastName: 'Pacheco', email: 'aa@gmail.com'}
  ];

  record: any = null;

  actions: Action[] = []

  constructor() { }

  ngOnInit() {
    this.actions = [
      { icon: 'menu', action: (icon) => this.hola(icon) },
      { icon: 'face', action: () => this.chao() }]
  }

  hola = (icon) => this.record = icon;
  chao = () => console.log('chao');

}

export interface Action {
  icon: string;
  action: Function;
}
