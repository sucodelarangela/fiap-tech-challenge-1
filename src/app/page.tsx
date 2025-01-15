"use client";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { AddTransactionForm } from "@/components/AddTransactionForm";
import { LastTransactions } from "@/components/LastTransactions";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useFormatCurrency from "@/hooks/useFormatCurrency";
import { useFinancialServices } from "@/hooks/useFinancialServices";

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
};
const dataFormatada = new Date().toLocaleDateString("pt-BR", options);

export default function HomePage() {
  const { user, transactions, transactionService, refreshTransactions } =
    useFinancialServices();
  const formatCurrency = useFormatCurrency();
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const balance = user?.balance ?? 0;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <>
      <section className="flex flex-col bg-foreground rounded-lg p-10 md:p-6">
        <div className="text-white text-center md:text-left">
          <h2 className="mb-6">Olá, Fulano! :)</h2>
          <p className="text-sm capitalize">{dataFormatada}</p>
        </div>

        <div className="grow text-white my-10 lg:my-0 md:ml-auto md:w-1/2">
          <div className="flex items-center gap-6 border-b-2 border-b-orange-600 pb-4 mb-4">
            <h3>Saldo</h3>
            {!isBalanceVisible ? (
              <FaEye
                size={20}
                className="text-orange-600"
                role="button"
                onClick={handleBalanceVisibility}
              />
            ) : (
              <FaEyeSlash
                size={20}
                className="text-orange-600"
                role="button"
                onClick={handleBalanceVisibility}
              >
                coisa
              </FaEyeSlash>
            )}
          </div>
          <div>
            <p className="pb-2">Conta Corrente</p>
            <p className="font-roboto-mono text-2xl md:text-3xl md:pr-16">
              {isBalanceVisible ? formatCurrency(balance) : "R$ ******"}
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Button onClick={openModal}>Nova transação</Button>
        </div>
      </section>

      <LastTransactions transactions={transactions} />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddTransactionForm
          onSubmit={(transaction) => {
            transactionService.addTransaction(
              transaction.type,
              transaction.amount,
              new Date(transaction.date)
            );
            refreshTransactions();
            closeModal();
          }}
        />
      </Modal>
    </>
  );
}
