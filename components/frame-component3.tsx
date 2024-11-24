import type { NextPage } from "next";
import Component5 from "./component5";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[266px] h-80 flex flex-col items-start justify-start gap-[30px] ${className}`}
    >
      <div className="w-[265px] h-10 flex flex-row items-start justify-start gap-[47px]">
        <Component5
          variant={2}
          text="For you"
          variant1hoverfalseHeight="40px"
        />
        <Component5
          variant={2}
          text="For you"
          variant1hoverfalseHeight="unset"
          component1="/variant3.svg"
        />
      </div>
      <div className="w-[265px] h-10 flex flex-row items-start justify-start gap-[47px]">
        <Component5
          variant={3}
          text="For you"
          variant1hoverfalseHeight="40px"
        />
        <Component5
          variant={3}
          text="For you"
          variant1hoverfalseHeight="unset"
        />
      </div>
      <div className="w-[266px] h-10 flex flex-row items-start justify-start gap-[46px]">
        <Component5
          variant={4}
          text="For you"
          variant1hoverfalseHeight="40px"
          component1="/component-1-4.svg"
        />
        <Component5
          variant={4}
          text="For you"
          variant1hoverfalseHeight="unset"
          component1="/variant7.svg"
        />
      </div>
      <div className="w-[265px] h-10 flex flex-row items-start justify-start gap-[47px]">
        <Component5
          variant={5}
          text="For you"
          variant1hoverfalseHeight="40px"
          component1="/component-1-5.svg"
        />
        <Component5
          variant={5}
          text="For you"
          variant1hoverfalseHeight="unset"
          component1="/variant9.svg"
        />
      </div>
      <div className="w-[265px] h-10 flex flex-row items-start justify-start gap-[47px]">
        <Component5
          variant={6}
          text="For you"
          variant1hoverfalseHeight="40px"
          component1="/component-1-6.svg"
        />
        <Component5
          variant={6}
          text="For you"
          variant1hoverfalseHeight="unset"
          component1="/variant11.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent3;
