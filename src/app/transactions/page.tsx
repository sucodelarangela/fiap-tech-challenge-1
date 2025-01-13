import { Transaction } from "@/utils/Transaction";
import { FaEdit, FaTrash } from "react-icons/fa";
import styles from "./page.module.css";
import useFormatCurrency from "@/hooks/useFormatCurrency";

function getMonthName(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString("pt-BR", { month: "long" });
}

function getTransactionName(transaction: string) {
  const transactionMap = new Map([
    ["deposit", "depósito"],
    ["transfer", "transferência"],
    ["expense", "despesa"],
  ]);
  return transactionMap.get(transaction);
}

export default function TransactionsPage() {
  const formatCurrency = useFormatCurrency();

  const transactions = [
    new Transaction("1", "deposit", 1000, new Date()),
    new Transaction("2", "expense", 200, new Date()),
  ];

  return (
    <section className="col-span-2 lg:col-span-1 bg-foreground rounded-lg p-6">
      <h2 className="text-white mb-6">Extrato</h2>
      <ul className="bg-white rounded-lg">
        {transactions.map((t) => (
          <li key={t.id} className={styles.transaction}>
            <span className="text-lime-500 text-sm font-semibold capitalize">
              {getMonthName(t.date.toString())}
            </span>
            <p className="flex justify-between items-center gap-4 capitalize">
              {getTransactionName(t.type)}
              <span className="text-gray-400 text-sm">
                {t.date.toLocaleDateString()}
              </span>
            </p>

            <p className="font-roboto-mono font-semibold">
              {formatCurrency(t.amount)}
            </p>

            <div className="flex gap-4 text-lg ml-auto">
              <FaEdit
                className="text-green-500 transition hover:text-green-400"
                title="Editar"
                role="button"
              />
              <FaTrash
                className="text-red-500 transition hover:text-red-400"
                title="Deletar"
                role="button"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
