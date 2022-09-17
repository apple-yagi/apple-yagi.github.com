import type { ComponentPropsWithRef } from "react";

export const HeaderLink = ({
  children,
  ...props
}: ComponentPropsWithRef<"a">): JSX.Element => (
  <a
    style={{
      display: "inline-block",
      textDecoration: "none",
    }}
    {...props}
  >
    {children}
  </a>
);
