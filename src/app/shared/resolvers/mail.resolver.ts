import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class MailResolver implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let user = this.userService.getUser();

    if (!user) {
      this.userService.login({ email: 'ofir@gmail.com', password: '123' });
      user = this.userService.getUser();
    }

    return user;
  }
}
