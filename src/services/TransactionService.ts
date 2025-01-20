/* eslint-disable @typescript-eslint/no-explicit-any */
import { Transaction, TransactionType } from "@/models/Transaction";
import { StorageService } from "./StorageService";
import { UserService } from "./UserService";

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
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
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

    // Atualiza o saldo do usuário
    const balanceChange = type === "deposit" ? amount : -amount;
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
    const oldBalanceChange = -oldTransaction.getBalanceChange();

    const newTransaction = new Transaction(
      id,
      type,
      amount,
      date,
      oldTransaction.userId
    );

    transactions[index] = newTransaction;

    this.storage.saveData(
      this.TRANSACTIONS_KEY,
      transactions.map((t) => t.toJSON())
    );
    this.userService.updateBalance(
      oldBalanceChange + newTransaction.getBalanceChange()
    );

    return newTransaction;
  }

  public deleteTransaction(id: string): void {
    const transactions = this.getStoredTransactions();
    const transaction = transactions.find((t) => t.id === id);

    if (!transaction) throw new Error("Transaction not found");

    const balanceChange = -transaction.getBalanceChange();

    this.storage.saveData(
      this.TRANSACTIONS_KEY,
      transactions.filter((t) => t.id !== id).map((t) => t.toJSON())
    );

    this.userService.updateBalance(balanceChange);
  }
}
