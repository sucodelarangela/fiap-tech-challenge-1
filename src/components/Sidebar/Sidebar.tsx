import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";
import Link from "next/link";

export function Sidebar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/transferencias", label: "Transferências" },
    { href: "/investimentos", label: "Investimentos" },
    { href: "/outros-servicos", label: "Outros Serviços" },
  ];

  return (
    <section className="bg-white text-center rounded-lg p-6">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.link} ${
                  pathname === link.href ? styles.active : ""
                }`}
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
