import Image from "next/image";

export const Header = () => (
  <header className="flex justify-between bg-foreground w-screen max-w-7xl p-8">
    <Image src="/logo.png" alt="Bytebank" width={140} height={40} />
    <div className="flex items-center gap-10 text-white">
      <span>Fulano de Tal</span>
      <Image src="/avatar.svg" alt="Avatar do Usuário" width={40} height={40} />
    </div>
  </header>
);
