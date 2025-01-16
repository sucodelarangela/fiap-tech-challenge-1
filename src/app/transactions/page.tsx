"use client";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Modal } from "@/components/Modal";
import { Button } from "@/components/Button";
import { AddTransactionForm } from "@/components/AddTransactionForm";
import useFormatCurrency from "@/hooks/useFormatCurrency";
import { useFinancialServices } from "@/hooks/useFinancialServices";
import { Transaction } from "@/models/Transaction";
import { toast } from "sonner";

function getMonthName(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString("pt-BR", { month: "long" });
}

function getTransactionName(transaction: string | undefined) {
  if (!transaction) return "";

  const transactionMap = new Map([
    ["deposit", "depósito"],
    ["transfer", "transferência"],
    ["expense", "despesa"],
  ]);
  return transactionMap.get(transaction);
}

export default function TransactionsPage() {
  const { transactions, transactionService, refreshData } =
    useFinancialServices();
  const formatCurrency = useFormatCurrency();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null);

  const openEditModal = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingTransaction(null);
  };
  const openDeleteModal = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setEditingTransaction(null);
  };

  return (
    <section className="col-span-1 md:col-span-2 lg:col-span-1 bg-foreground rounded-lg p-6">
      <h2 className="text-white mb-6">Extrato</h2>

      {transactions.length === 0 ? (
        <p className="text-center text-background">
          Nenhuma transação cadastrada.
        </p>
      ) : (
        <ul className="bg-white rounded-lg">
          {transactions.map((t) => (
            <li
              key={t.id}
              className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 border-dashed border-b-2 border-lime-500 rounded-lg p-3"
            >
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
                {["transfer", "expense"].includes(t.type) && "- "}
                {formatCurrency(t.amount)}
              </p>

              <div className="flex gap-4 text-lg ml-auto">
                <FaEdit
                  className="text-green-500 transition hover:text-green-400"
                  title="Editar"
                  role="button"
                  onClick={() => openEditModal(t)}
                />
                <FaTrash
                  className="text-red-500 transition hover:text-red-400"
                  title="Deletar"
                  role="button"
                  onClick={() => openDeleteModal(t)}
                />
              </div>
            </li>
          ))}
        </ul>
      )}

      <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
        {editingTransaction && (
          <AddTransactionForm
            initialType={editingTransaction.type}
            initialAmount={editingTransaction.amount}
            initialDate={editingTransaction.date.toISOString().split("T")[0]}
            title="Editar Transação"
            buttonText="Salvar Alterações"
            onSubmit={(transaction) => {
              transactionService.updateTransaction(
                editingTransaction.id,
                transaction.type,
                transaction.amount,
                new Date(transaction.date)
              );
              refreshData();
              toast.success("Transação editada com sucesso!");
              closeEditModal();
            }}
          />
        )}
      </Modal>

      <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
        {editingTransaction && (
          <>
            <h2 className="mb-8">Deletar Transação</h2>
            <p className="rounded-md p-1 mb-8">
              Esta ação irá excluir definitivamente a transação de{" "}
              <span className="font-semibold capitalize">
                {getTransactionName(editingTransaction.type)}
              </span>{" "}
              de{" "}
              <span className="font-semibold">
                {formatCurrency(editingTransaction.amount)}
              </span>
              . Gostaria de continuar mesmo assim?
            </p>

            <div className="flex justify-between">
              <Button
                variant="tertiary"
                onClick={() => {
                  closeDeleteModal();
                }}
              >
                Cancelar
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  transactionService.deleteTransaction(editingTransaction.id);
                  refreshData();
                  toast.success("Transação excluída com sucesso!");
                  closeDeleteModal();
                }}
              >
                Deletar
              </Button>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
