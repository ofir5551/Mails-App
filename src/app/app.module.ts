import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MailsComponent } from './mails/mails.component';
import { MailItemComponent } from './mail-item/mail-item.component';
import { BackendInterceptor } from './shared/interceptors/backend.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MailsComponent,
    MailItemComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BackendInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
