import React from "react";
import clsx from "clsx";

type Props = {
  message: string | undefined;
  className?: string;
};

export const ErrorMessage: React.FC<Props> = ({ message, className }) => (
  <div className={clsx("alert alert-danger", className)} role="alert">
    {message}
  </div>
);
