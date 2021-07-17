import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MailItem } from '../shared/models/mail-item.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.scss'],
})
export class MailItemComponent implements OnInit {
  mailItem: MailItem;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const urlParts = this.router.url.split('/');
    this.mailItem = this.userService.getMailItemByIndex(
      Number(urlParts[urlParts.length - 1])
    );
  }

  navigateHome() {
    this.router.navigate(['/']);
  }
}