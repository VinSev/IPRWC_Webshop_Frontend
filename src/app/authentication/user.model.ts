export class User {
  public static _emptyUser = new User("", [""]);

  constructor(private _email: string,
              private _roles: string[]) {
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get roles(): string[] {
    return this._roles;
  }

  set roles(value: string[]) {
    this._roles = value;
  }
}
