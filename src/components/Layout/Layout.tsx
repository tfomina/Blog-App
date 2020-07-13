import React, { ReactNode } from "react";
import { TopBar } from "components/TopBar";

type Props = {
  children?: ReactNode;
};

export const Layout: React.FC<Props> = (props) => (
  <>
    <TopBar />
    <div className="container py-5">
      <div className="row">{props.children}</div>
    </div>
  </>
);
