

export class UserFormModel {

  public subscription: string;
  public email: string;
  public password: string;

  public constructor( subscription: string, email: string, password: string) {
    this.subscription = subscription;
    this.email = email;
    this.password = password;
  }

}
