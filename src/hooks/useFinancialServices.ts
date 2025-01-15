import { Transaction } from "@/models/Transaction";
import { User } from "@/models/User";
import { TransactionService } from "@/services/TransactionService";
import { UserService } from "@/services/UserService";
import { useState, useEffect, useCallback } from "react";

export function useFinancialServices() {
  const [userService] = useState(() => new UserService());
  const [transactionService] = useState(() => new TransactionService());
  const [user, setUser] = useState<User | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const refreshData = useCallback(() => {
    const currentUser = userService.getCurrentUser();
    setUser(currentUser);
    if (currentUser) {
      setTransactions(transactionService.getAllTransactions());
    }
  }, [userService, transactionService]);

  useEffect(() => {
    // Inicializar usuário se não existir
    const currentUser = userService.getCurrentUser();
    if (!currentUser) {
      const newUser = new User(crypto.randomUUID(), "João Silva", 0);
      userService.saveUser(newUser);
      setUser(newUser);
    } else {
      setUser(currentUser);
    }
  }, [userService]);

  useEffect(() => {
    if (user) {
      setTransactions(transactionService.getAllTransactions());
    }
  }, [user, transactionService]);

  return {
    user,
    transactions,
    userService,
    transactionService,
    refreshData,
  };
}
