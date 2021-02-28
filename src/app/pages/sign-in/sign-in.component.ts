import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user: any = { email: '', password: '' };

  constructor(
    private _service: UserService,
    private _router: Router) { }

  ngOnInit() {
    localStorage.clear();
  }

  login = () => 
    this._service.signin(this.user).then((res)=> {
      localStorage.setItem('user', JSON.stringify(res[0]));
      this._router.navigate(['/dash'])
    }, error => console.log('BUUU'));

}
