import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteBank",
  description: "App de gerenciamento financeiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <h1 className="sr-only">Bem vindo ao ByteBank</h1>
        <Header />
        <main className="grid grid-cols-[180px_1fr_280px] gap-6 max-w-7xl m-auto p-6">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
