import { useState, useEffect } from "react";
import { TransactionType } from "@/models/Transaction";
import { Button } from "@/components/Button";

interface AddTransactionFormProps {
  initialType?: TransactionType | "";
  initialAmount?: number;
  initialDate?: string;
  onSubmit: (transaction: {
    type: TransactionType;
    amount: number;
    date: string;
  }) => void;
  title?: string;
  buttonText?: string;
}

export function AddTransactionForm({
  initialType = "",
  initialAmount = 0,
  initialDate = new Date().toISOString().split("T")[0],
  onSubmit,
  title = "Adicionar Nova Transação",
  buttonText = "Criar Transação",
}: AddTransactionFormProps) {
  const [type, setType] = useState<TransactionType | "">(initialType);
  const [amount, setAmount] = useState<number>(initialAmount);
  const [date, setDate] = useState<string>(initialDate);
  const isDisabled = amount <= 0 || type === "";

  const handleSubmit = () => {
    onSubmit({ type: type as TransactionType, amount, date });
  };

  useEffect(() => {
    setType(initialType);
    setAmount(initialAmount);
    setDate(initialDate);
  }, [initialType, initialAmount, initialDate]);

  return (
    <>
      <h2 className="mb-8 backdrop-blur-sm">{title}</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as TransactionType)}
          className="w-full p-4 border border-foreground rounded-lg mb-8 appearance-none bg-select-arrow bg-no-repeat bg-right"
          title="Selecione o tipo de transação"
        >
          <option value="" defaultValue="" disabled>
            Selecione o tipo de transação
          </option>
          <option value="deposit">Depósito</option>
          <option value="transfer">Transferência</option>
          <option value="expense">Despesa</option>
        </select>

        <div className="mb-8">
          <label htmlFor="amount" className="block mb-1">
            Valor
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full p-4 border border-foreground rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block mb-1">
            Data
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-4 border border-foreground rounded-lg"
          />
        </div>

        <Button
          variant="secondary"
          onClick={handleSubmit}
          disabled={isDisabled}
        >
          {buttonText}
        </Button>
      </form>
    </>
  );
}
