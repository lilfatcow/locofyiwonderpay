import type { NextPage } from "next";
import Component4 from "./component4";
import Component5 from "./component5";

export type MainType = {
  className?: string;
};

const Main: NextPage<MainType> = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-start relative ${className}`}
    >
      <div className="h-px w-[195.9px] absolute !m-[0] top-[48px] right-[-21.9px] bg-silver-300" />
      <div className="h-px w-[195.9px] absolute !m-[0] right-[-21.9px] bottom-[48px] bg-silver-300" />
      <div className="flex flex-col items-start justify-start gap-[17px]">
        <Component4
          variant={1}
          text="Wonderland Studio"
          variant1hoverfalseHeight="40px"
        />
        <div className="flex flex-col items-start justify-start py-0 pl-0 pr-px gap-0.5">
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
          <Component5
            variant={4}
            text="WonderPay Capital"
            variant1hoverfalseHeight="40px"
            component1="/component-1-4.svg"
          />
          <Component5
            variant={5}
            text={`Clients & Vendors`}
            variant1hoverfalseHeight="40px"
            component1="/component-1-5.svg"
          />
        </div>
        <Component5
          variant={6}
          text="Settings"
          variant1hoverfalseHeight="40px"
          component1="/component-1-6.svg"
        />
      </div>
    </section>
  );
};

export default Main;
