import React, { ReactNode } from "react";
import { TopBar } from "components/TopBar";

type Props = {
  children?: ReactNode;
};

export const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <TopBar />
      {props.children}
    </>
  );
};
