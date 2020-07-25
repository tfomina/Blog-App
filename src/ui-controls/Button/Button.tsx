import React from "react";
import clsx from "clsx";

type ButtonType = "button" | "submit";

type Props = {
  text: string;
  type: ButtonType;
  className?: string;
  disabled: boolean;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
} & typeof defaultProps;

const defaultProps = {
  type: "button" as ButtonType,
  disabled: false,
};

export const Button = (props: Props) => {
  const { text, type, className, onClick, disabled } = props;

  return (
    <button
      className={clsx("btn btn-lg btn-success", className)}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.defaultProps = defaultProps;
