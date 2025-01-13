export class Transaction {
  id: string;
  type: "deposit" | "transfer" | "expense";
  amount: number;
  date: Date;

  constructor(
    id: string,
    type: "deposit" | "transfer" | "expense",
    amount: number,
    date: Date
  ) {
    this.id = id;
    this.type = type;
    this.amount = amount;
    this.date = date;
  }

  formatAmount(): string {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(this.amount);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static createFromJSON(data: any): Transaction {
    return new Transaction(
      data.id,
      data.type,
      data.amount,
      new Date(data.date)
    );
  }
}
