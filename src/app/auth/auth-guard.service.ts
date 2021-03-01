import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

    constructor(public router: Router) { }

    canActivate(): boolean {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user==null) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}