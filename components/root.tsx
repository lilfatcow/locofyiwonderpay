import type { NextPage } from "next";
import Main from "./main";

export type RootType = {
  className?: string;
};

const Root: NextPage<RootType> = ({ className = "" }) => {
  return (
    <div
      className={`w-60 h-[760px] flex flex-col items-start justify-start pt-3 px-3 pb-[426px] box-border leading-[normal] tracking-[normal] ${className}`}
    >
      <Main />
    </div>
  );
};

export default Root;
