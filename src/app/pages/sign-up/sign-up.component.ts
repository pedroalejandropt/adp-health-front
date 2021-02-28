import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  hide: boolean = true;
  user: any = { firstName: '', middleName: '', firstLastName: '', secondLastName: '', email: '', password: '', role: 2 };
  
  constructor(
    private _service: UserService,
    private _router: Router
    ) { }

  ngOnInit() {}

  signUp = () => {
    this._service.signup(this.user).then(() => { console.log('YESS'); this._router.navigate(['/']); })
  }

  checkUser = () => {
    if (this.user.firstName=='' || this.user.firstLastName=='' || this.user.secondLastName=='' || this.user.email=='' || this.user.password=='') return true; return false;
  }
  
}
