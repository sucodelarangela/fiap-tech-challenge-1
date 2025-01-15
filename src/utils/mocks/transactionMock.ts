import { TransactionDTO, TransactionType } from "../../models/transactionDTO";

export const transactionMock: TransactionDTO[] = [
  {
    id: "1",
    type: TransactionType.Deposit,
    amount: 1000,
    date: new Date("2025-01-01"),
    userId: "user1",
  },
  {
    id: "2",
    type: TransactionType.Transfer,
    amount: 500,
    date: new Date("2025-01-05"),
    userId: "user1",
  },
  {
    id: "3",
    type: TransactionType.Expense,
    amount: 300,
    date: new Date("2025-01-10"),
    userId: "user1",
  },
];
