import { Button } from "@/components/Button";
import { useState } from "react";

export function AddTransactionPage() {
  const [type, setType] = useState<"deposit" | "transfer" | "expense" | "">("");
  const [amount, setAmount] = useState<number>(0);
  const isDisabled = amount <= 0 || type === "";

  const handleSubmit = () => {
    // Enviar a transação para a API ou banco de dados
    alert(`Transação de ${type} de R$ ${amount} criada com sucesso!`);
  };

  return (
    <>
      <h2 className="mb-8">Adicionar Nova Transação</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <select
          value={type}
          onChange={(e) =>
            setType(e.target.value as "deposit" | "transfer" | "expense")
          }
          className="p-4 border border-foreground rounded-lg mb-8"
        >
          <option defaultValue="" disabled>
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
            className="p-4 border border-foreground rounded-lg"
            required
          />
        </div>
        <Button
          variant="secondary"
          onClick={handleSubmit}
          disabled={isDisabled}
        >
          Criar Transação
        </Button>
      </form>
    </>
  );
}
