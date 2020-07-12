import React from "react";
import clsx from "clsx";
import { ErrorMessage } from "../ErrorMessage";

export type Props = {
  name: string;
  type: string;
  placeholder: string;
  error: string | undefined;
} & typeof defaultProps;

const defaultProps = {
  type: "text",
};

type Ref = HTMLInputElement;

// TODO Переделать так, чтобы не было ошибки с defaultProps
// у компонента, обернутого в forwardRef
export const Input = React.forwardRef<Ref, Props>((props, ref) => {
  const { name, type, placeholder, error } = props;

  return (
    <input
      name={name}
      type={type}
      className={clsx(
        "form-control form-control-lg shadow-none",
        error && "border-danger"
      )}
      placeholder={placeholder}
      ref={ref}
    />
  );
});

Input.defaultProps = defaultProps;

// TODO Переделать так, чтобы не было ошибки с defaultProps
// у компонента, обернутого в forwardRef
export const InputWithError = React.forwardRef<Ref, Props>((props, ref) => {
  const { error } = props;
  return (
    <>
      <Input {...props} ref={ref} />
      <ErrorMessage message={error} />
    </>
  );
});

InputWithError.defaultProps = defaultProps;
