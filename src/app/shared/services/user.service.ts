import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs';
import { MailItem } from '../models/mail-item.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;
  userSubject = new Subject<User>();

  constructor(private http: HttpClient) {}

  setRead(mailIndex: number, isRead: boolean) {
    this.user.mails[mailIndex].isRead = isRead;
  }

  login(userCredentials: { email: string; password: string }) {
    this.http
      .post<User>(`http://localhost:3000/login`, userCredentials)
      .subscribe((res) => {
        this.user = new User(res.name, res.mails);
        this.userSubject.next(this.user);
      });
  }

  getMailItemByIndex(index: number): MailItem {
    return this.user.mails[index];
  }

  getUser() {
    return this.user;
  }
}
