import type { Metadata } from "next";
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
      <body className="antialiased" >
        {children}
      </body>
    </html>
  );
}
