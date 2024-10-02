import React from "react";

type Props = {
  children: any;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto sm:px-0 px-4 w-full">{children}</div>
  );
};

export default Container;
