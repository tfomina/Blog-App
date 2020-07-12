import React from "react";
import clsx from "clsx";

type ButtonType = "button" | "submit";

type Props = {
  text: string;
  type: ButtonType;
  className?: string;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
} & typeof defaultProps;

const defaultProps = {
  type: "button" as ButtonType,
};

export const Button = (props: Props) => {
  const { text, type, className, onClick } = props;

  return (
    <button
      className={clsx("btn btn-lg btn-success", className)}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = defaultProps;
