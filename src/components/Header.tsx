import Image from "next/image";

export const Header = () => (
  <header className="bg-foreground w-full p-8">
    <section className="flex justify-between max-w-7xl m-auto">
      <Image src="/logo.png" alt="Bytebank" width={140} height={40} />
      <div className="flex items-center gap-10 text-white">
        <span>Fulano de Tal</span>
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
