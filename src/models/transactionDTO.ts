export enum TransactionType {
  Deposit = "deposit",
  Transfer = "transfer",
  Expense = "expense",
}

export interface TransactionDTO {
  id: string;
  type: TransactionType;
  amount: number;
  date: Date;
  userId: string;
}
