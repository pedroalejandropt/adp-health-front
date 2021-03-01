import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { popUpMessage } from 'src/assets/alert/alert';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  error: string = '';
  hide: boolean = true;
  user: any = { firstName: '', middleName: '', firstLastName: '', secondLastName: '', email: '', password: '', role: 2 };
  
  constructor(
    private _service: UserService,
    private _router: Router
    ) { }

  ngOnInit() {}

  signUp = () => {
    this._service.signup(this.user).then(async () => { 
      this.error = '';
      await popUpMessage.fire({ icon: 'success', title: 'Account Created Successfully' }); 
      await this._router.navigate(['/']); 
    },
      error => { this.error = error.error.message; popUpMessage.fire({ icon: 'error', title: 'Error Creating an Account' });  }) 
  }

  checkUser = () => {
    if (this.user.firstName=='' || this.user.firstLastName=='' || this.user.secondLastName=='' || this.user.email=='' || this.user.password=='') return true; return false;
  }
  
}
