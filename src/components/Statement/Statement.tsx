import useFormatCurrency from "@/app/hooks/useFormatCurrency";
import React from "react";
import styles from "./Statement.module.css";

interface StatementProps {
  transactions?: Transaction[];
}

interface Transaction {
  date: string;
  amount: number;
  type: "depósito" | "transferência";
}

const mockTransactions: Transaction[] = [
  { date: "2023-10-01", amount: 100, type: "depósito" },
  { date: "2023-10-02", amount: 50, type: "transferência" },
  { date: "2023-10-03", amount: 200, type: "depósito" },
  { date: "2023-10-04", amount: -150, type: "transferência" },
];

function getMonthName(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString("pt-BR", { month: "long" });
}

export function Statement({ transactions = mockTransactions }: StatementProps) {
  const formatCurrency = useFormatCurrency();

  return (
    <section className="bg-white rounded-lg p-6">
      <h2 className="font-bold pb-6">Últimas Transações</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <React.Fragment key={index}>
            <li className={styles.transaction}>
              <span className="text-lime-500 text-sm font-semibold capitalize">
                {getMonthName(transaction.date)}
              </span>
              <p className="flex justify-between items-center capitalize">
                {transaction.type}{" "}
                <span className="text-gray-400 text-sm">
                  {transaction.date}
                </span>
              </p>
              <p className="font-roboto-mono font-semibold">
                {formatCurrency(transaction.amount)}
              </p>
            </li>
            <div className={styles.divider}></div>
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}
