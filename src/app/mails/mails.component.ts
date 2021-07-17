import { Component, OnInit } from '@angular/core';
import { MailItem } from '../shared/models/mail-item.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.scss'],
})
export class MailsComponent implements OnInit {
  constructor(private userService: UserService) {}

  mails: MailItem[];
  categories: string[] = ['General', 'Spam', 'Sales'];
  unreadCount: number;
  readCount: number;

  ngOnInit(): void {
    this.mails = this.userService.getUser()?.mails;
    this.userService.userSubject.subscribe((user) => {
      this.mails = user.mails;
      this.countEmails();
    });

    if (this.mails) {
      this.countEmails();
    }
  }

  onMailClick = (index: number): void => {
    this.userService.setRead(index, true);
  };

  onFlagClick = (index: number): void => {
    this.userService.setRead(index, false);
    this.countEmails();
  };

  private countEmails() {
    this.unreadCount = this.mails?.filter(
      (mail) => mail.isRead == false
    ).length;
    this.readCount = this.mails?.length;
  }
}
