"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaXmark } from "react-icons/fa6";

interface SidebarProps {
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({
  isMobile = false,
  isOpen = false,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/transactions", label: "Extrato" },
    { href: "/investments", label: "Investimentos" },
    { href: "/other-services", label: "Outros Serviços" },
  ];

  const mobileClasses = isOpen ? "translate-x-0" : "-translate-x-full";

  return (
    <section
      className={`${
        isMobile
          ? `fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform p-6 ${mobileClasses}`
          : "hidden md:block bg-white rounded-lg p-6 md:p-4 md:col-span-2 lg:col-span-1 lg:p-6"
      }`}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-gray-500 z-10 transition hover:text-foreground md:hidden"
      >
        <FaXmark />
      </button>

      <nav>
        <ul className="md:flex md:justify-between lg:block">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`link ${pathname === link.href ? "active" : ""} ${
                  ["/investments", "/other-services"].includes(link.href)
                    ? "disabled"
                    : ""
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={isMobile && onClose ? onClose : undefined}
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
