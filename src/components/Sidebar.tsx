"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Sidebar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/transactions", label: "Extrato" },
    { href: "/investimentos", label: "Investimentos" },
    { href: "/outros-servicos", label: "Outros Serviços" },
  ];

  return (
    <section className="hidden lg:block bg-white text-center rounded-lg p-6">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`link ${pathname === link.href ? "active" : ""}`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
