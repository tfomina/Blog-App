import React from "react";
import clsx from "clsx";

type Props = {
  message: string | undefined;
  className?: string;
};

export const ErrorMessage: React.FC<Props> = ({ message, className }) => {
  if (!message) return null;

  return (
    <div className={clsx("alert alert-danger", className)} role="alert">
      {message}
    </div>
  );
};
