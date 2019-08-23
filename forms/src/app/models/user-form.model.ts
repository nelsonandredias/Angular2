
export class UserFormModel {

  public username: string;
  public email: string;
  public secretQuestion: string;
  public answer: string;
  public gender: string;

  public constructor(username: string, email: string, secretQuestion: string, answer: string, gender: string) {
    this.username = username;
    this.email = email;
    this.secretQuestion = secretQuestion;
    this.answer = answer;
    this.gender = gender;
  }

}
