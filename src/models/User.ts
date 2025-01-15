export class User {
  constructor(
    public id: string,
    public name: string,
    public balance: number = 0
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromJSON(json: any): User {
    return new User(json.id, json.name, json.balance);
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      balance: this.balance,
    };
  }
}
