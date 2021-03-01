import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { popUpMessage } from 'src/assets/alert/alert';

@Component({
  selector: 'app-administrators',
  templateUrl: './administrators.component.html',
  styleUrls: ['./administrators.component.scss']
})
export class AdministratorsComponent implements OnInit {

  error: string = '';
  hide: boolean = true;

  title: string = 'List of Administrators';
  header: any = {'firstName': 'First Name', 'firstLastName': 'Last Name', 'email': 'Mail'}

  administrators: any[] = [];

  administrator: any = { firstName: '', middleName: '', firstLastName: '', secondLastName: '', email: '', password: '', role: 1 };

  form: boolean = false;

  actions: Action[] = []

  loading: boolean = true;

  constructor(
    private _service: UserService
    ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers = () => this._service.fetchAdministrators().then((res: any) => { this.administrators = res; this.loading = false })

  addAdmin = () => { 
    this._service.signup(this.administrator).then(async ()=> { 
      this.error = '';
      await popUpMessage.fire({ icon: 'success', title: 'Admin Account Created Successfully' }); 
      await this.fetchUsers();
      await this.cancel();
    },
      error => { this.error = error.error.message; popUpMessage.fire({ icon: 'error', title: 'Error Creating an Account' });  }) 
  }

  checkUser = () => {
    if (this.administrator.firstName=='' || this.administrator.firstLastName=='' || this.administrator.secondLastName=='' || this.administrator.email=='' || this.administrator.password=='') return true; return false;
  }

  cancel = () => {
    this.form = false;
    this.administrator = { firstName: '', middleName: '', firstLastName: '', secondLastName: '', email: '', password: '', role: 1 };
  }
  
}

export interface Action {
  icon: string;
  tooltip: string;
  action: Function;
}
