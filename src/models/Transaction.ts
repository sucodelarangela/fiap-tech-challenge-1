export type TransactionType = "deposit" | "transfer" | "expense";

export class Transaction {
  constructor(
    public id: string,
    public type: TransactionType,
    public amount: number,
    public date: Date,
    public userId: string
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromJSON(json: any): Transaction {
    return new Transaction(
      json.id,
      json.type,
      json.amount,
      new Date(json.date),
      json.userId
    );
  }

  toJSON() {
    return {
      id: this.id,
      type: this.type,
      amount: this.amount,
      date: this.date.toISOString(),
      userId: this.userId,
    };
  }
}
