"use client";
import { useState } from "react";
import { Statement } from "@/components/Statement/Statement";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useFormatCurrency from "@/hooks/useFormatCurrency";

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
};
const dataFormatada = new Date().toLocaleDateString("pt-BR", options);

export default function HomePage() {
  const formatCurrency = useFormatCurrency();
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);
  const [balance, setBalance] = useState(formatCurrency(2500));

  const handleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
    if (isBalanceVisible) setBalance(formatCurrency(2500));
    else setBalance("R$ ******");
  };

  return (
    <>
      <section className="bg-foreground rounded-lg max-h-96 p-6">
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

      <Statement />
    </>
  );
}
