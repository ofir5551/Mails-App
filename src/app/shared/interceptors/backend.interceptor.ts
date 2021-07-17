import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

import * as mailsJSON from '../../../assets/mails.json';
import { User } from '../models/user.model';
import { MailItem } from '../models/mail-item.model';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
  mails: any = (mailsJSON as any).default;

  mockUser: User = {
    name: 'Ofir Ben Yamin',
    mails: this.mails,
  };

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return of(new HttpResponse({ body: this.mockUser, status: 200 }));
  }
}
