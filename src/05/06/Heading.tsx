import { ComponentProps } from "react";

export const Heading = (props: ComponentProps<"h3">) => {
  return (
    <h3
      style={{
        margin: "0px 0px 8px 0px",
        padding: "8px 0px 8px 0px",
        borderBottom: "1px solid #ccc",
      }}
      {...props}
    />
  );
};
