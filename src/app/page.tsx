"use client";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
};
const dataFormatada = new Date().toLocaleDateString("pt-BR", options);

const formatCurrency = (amount: number) => {
  const value = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
    style: "currency",
  }).format(amount);

  return value;
};

export default function HomePage() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);
  const [balance, setBalance] = useState(formatCurrency(2500));

  const handleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
    if (isBalanceVisible) setBalance(formatCurrency(2500));
    else setBalance("R$ ******");
  };

  return (
    <>
      <Header />
      <main className="grid grid-cols-[180px_1fr_280px] gap-6 max-w-7xl m-auto p-6">
        <h1 className="sr-only">Bem vindo ao ByteBank</h1>

        <Sidebar />

        <section className="bg-foreground rounded-lg min-h-96 p-6">
          <div className="greetings text-white">
            <h2 className="mb-6">Olá, Fulano! :)</h2>
            <p className="text-sm capitalize">{dataFormatada}</p>
          </div>
          <div className="summary text-white ml-auto w-1/2">
            <div className="flex items-center gap-6 border-b-2 border-b-orange-600 pb-4 mb-4">
              <h3>Saldo</h3>
              {isBalanceVisible ? (
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
              <p className="font-roboto-mono text-3xl pr-16">{balance}</p>
            </div>
          </div>
        </section>

        <section className="bg-white">EXTRATO</section>
      </main>
    </>
  );
}
