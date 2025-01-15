"use client";
import { useState } from "react";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { Sidebar } from "./Sidebar";
import { useFinancialServices } from "@/hooks/useFinancialServices";

export const Header = () => {
  const { user } = useFinancialServices();
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-foreground w-full p-8">
      <section className="flex justify-between max-w-7xl m-auto">
        <Image
          src="/logo.png"
          alt="Bytebank"
          width={140}
          height={40}
          className="hidden md:block"
        />

        <span className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#f97316"
            size={24}
          />
        </span>

        <span className="md:hidden">
          <Sidebar isMobile isOpen={isOpen} onClose={() => setOpen(false)} />
        </span>

        <div className="flex items-center gap-4 md:gap-10 text-white">
          <span>{user && user.name}</span>
          <Image
            src="/avatar.svg"
            alt="Avatar do Usuário"
            width={40}
            height={40}
          />
        </div>
      </section>
    </header>
  );
};
