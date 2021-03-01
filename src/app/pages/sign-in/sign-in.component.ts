import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { popUpMessage } from 'src/assets/alert/alert';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  hide: boolean = true;
  error: boolean = false;
  user: any = { email: '', password: '' };

  constructor(
    private _service: UserService,
    private _router: Router) { }

  ngOnInit() {
    localStorage.clear();
  }

  login = () => 
    this._service.signin(this.user).then(async (res)=> {
      this.error = false;
      await popUpMessage.fire({ icon: 'success', title: 'Signed in successfully' });
      await localStorage.setItem('user', JSON.stringify(res[0]));
      await this._router.navigate(['/dash'])
    }, error => { popUpMessage.fire({ icon: 'error', title: 'Error trying to sign in.' }); this.error = true });

    checkUser = () => {
      if ( this.user.email=='' || this.user.password=='') return true; else return false;
    }

}
