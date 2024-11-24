import type { NextPage } from "next";
import Component4 from "./component4";
import Component5 from "./component5";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[205.9px] flex flex-col items-start justify-start gap-0.5 ${className}`}
    >
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1.5">
        <Component4
          variant={1}
          text="Wonderland Studio"
          variant1hoverfalseHeight="unset"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-1.5 pl-2.5 pr-0">
        <div className="h-px flex-1 relative bg-silver-300" />
      </div>
      <div className="flex flex-col items-start justify-start gap-0.5">
        <Component5
          variant={1}
          text="Home"
          variant1hoverfalseHeight="unset"
          component1="/component-1-1.svg"
        />
        <Component5
          variant={2}
          text="Bill Pay"
          variant1hoverfalseHeight="40px"
        />
        <Component5
          variant={3}
          text="Receivables"
          variant1hoverfalseHeight="40px"
        />
      </div>
      <Component5
        variant={4}
        text="WonderPay Capital"
        variant1hoverfalseHeight="40px"
        component1="/component-1-4.svg"
      />
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1.5">
        <Component5
          variant={5}
          text={`Clients & Vendors`}
          variant1hoverfalseHeight="unset"
          component1="/component-1-5.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-1.5 pl-2.5 pr-0">
        <div className="h-px flex-1 relative bg-silver-300" />
      </div>
      <Component5
        variant={6}
        text="Settings"
        variant1hoverfalseHeight="40px"
        component1="/component-1-6.svg"
      />
    </div>
  );
};

export default FrameComponent1;
