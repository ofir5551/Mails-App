import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  user: User;

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.userService.userSubject.subscribe((user) => (this.user = user));
  }

  login() {
    this.userService.login({ email: 'ofir@gmail.com', password: '123' });
  }
}
