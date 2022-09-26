import React from "react";

interface Props {
  onClick: () => void;
  style?: "medium" | "large";
  type?: "submit" | "button" | "reset";
  children?: React.ReactNode;
  disabled?: boolean;
}

const Button = (props: Props) => {
  const { type, onClick, children, disabled, style } = props;
  return (
    <button
      type={type ?? "submit"}
      onClick={onClick}
      className={`bg-purple-main font-UncutSans rounded-full font-bold ${
        style === "large"
          ? "text-4xl px-14 py-[9.5px]"
          : " text-2xl px-12 py-[9px]"
      }
      shadow-elevation-4 disabled:bg-monoGray flex items-center gap-6`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
