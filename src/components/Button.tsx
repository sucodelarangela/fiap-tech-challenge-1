import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) => {
  const buttonClass = classNames(
    "px-10 py-4 rounded font-semibold text-white transition",
    variant === "primary"
      ? "bg-orange-500 hover:bg-orange-400"
      : "bg-foreground hover:bg-cyan-800",
    disabled && "opacity-25 pointer-events-none"
  );

  return (
    <button onClick={onClick} className={buttonClass} disabled={disabled}>
      {children}
    </button>
  );
};
