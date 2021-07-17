import { MailItem } from "./mail-item.model";

export class User {
    constructor(
      public name: string,
      public mails: MailItem[]
    ) {}
  }