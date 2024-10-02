import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const FCHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-[1.5rem] md:text-[2rem] font-bold text-center ">
        <strong className="font-bold text-primary ">{title}</strong>
      </h1>
      <h1 className="text-base md:text-lg font-normal text-center mb-4 max-w-[700px] ">
        {subtitle}
      </h1>
    </div>
  );
};

export default FCHeader;
