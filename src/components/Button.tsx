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
    "rounded font-semibold text-white px-5 py-3 transition md:px-10 md:py-4 ",
    {
      "bg-orange-500 hover:bg-orange-400": variant === "primary",
      "bg-foreground hover:bg-cyan-800": variant === "secondary",
      "opacity-25 pointer-events-none": disabled,
    }
  );

  return (
    <button onClick={onClick} className={buttonClass} disabled={disabled}>
      {children}
    </button>
  );
};
