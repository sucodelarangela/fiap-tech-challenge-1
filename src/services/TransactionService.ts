/* eslint-disable @typescript-eslint/no-explicit-any */
import { StorageService } from "./StorageService";
import { UserService } from "./UserService";
import { Transaction, TransactionType } from "@/models/Transaction";

export class TransactionService {
  private storage: StorageService;
  private userService: UserService;
  private readonly TRANSACTIONS_KEY = "transactions";

  constructor() {
    this.storage = new StorageService();
    this.userService = new UserService();
  }

  private getStoredTransactions(): Transaction[] {
    const transactions =
      this.storage.getData<any[]>(this.TRANSACTIONS_KEY) || [];
    return transactions.map((t) => Transaction.fromJSON(t));
  }

  public getAllTransactions(): Transaction[] {
    const user = this.userService.getCurrentUser();
    if (!user) return [];

    return this.getStoredTransactions()
      .filter((t) => t.userId === user.id)
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  public addTransaction(
    type: TransactionType,
    amount: number,
    date: Date
  ): Transaction {
    const user = this.userService.getCurrentUser();
    if (!user) throw new Error("User not found");

    const transaction = new Transaction(
      crypto.randomUUID(),
      type,
      amount,
      date,
      user.id
    );

    const transactions = this.getStoredTransactions();
    transactions.push(transaction);
    this.storage.saveData(
      this.TRANSACTIONS_KEY,
      transactions.map((t) => t.toJSON())
    );

    // Atualizar o saldo do usuário
    const balanceChange = type === "expense" ? -amount : amount;
    this.userService.updateBalance(balanceChange);

    return transaction;
  }

  public updateTransaction(
    id: string,
    type: TransactionType,
    amount: number,
    date: Date
  ): Transaction {
    const transactions = this.getStoredTransactions();
    const index = transactions.findIndex((t) => t.id === id);

    if (index === -1) throw new Error("Transaction not found");

    const oldTransaction = transactions[index];
    const oldBalanceChange =
      oldTransaction.type === "expense"
        ? oldTransaction.amount
        : -oldTransaction.amount;

    const newBalanceChange = type === "expense" ? -amount : amount;

    transactions[index] = new Transaction(
      id,
      type,
      amount,
      date,
      oldTransaction.userId
    );

    this.storage.saveData(
      this.TRANSACTIONS_KEY,
      transactions.map((t) => t.toJSON())
    );
    this.userService.updateBalance(oldBalanceChange + newBalanceChange);

    return transactions[index];
  }

  public deleteTransaction(id: string): void {
    const transactions = this.getStoredTransactions();
    const transaction = transactions.find((t) => t.id === id);

    if (!transaction) throw new Error("Transaction not found");

    const balanceChange =
      transaction.type === "expense" ? transaction.amount : -transaction.amount;

    this.storage.saveData(
      this.TRANSACTIONS_KEY,
      transactions.filter((t) => t.id !== id).map((t) => t.toJSON())
    );

    this.userService.updateBalance(balanceChange);
  }
}
