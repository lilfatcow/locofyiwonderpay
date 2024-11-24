import type { NextPage } from "next";
import FrameComponent2 from "./frame-component2";
import Component1Set from "./component1-set";

export type Component1Type = {
  className?: string;
};

const Component1: NextPage<Component1Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start gap-[81px] leading-[normal] tracking-[normal] ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[27px] px-0 pb-0">
        <FrameComponent2 />
      </div>
      <Component1Set />
    </div>
  );
};

export default Component1;
