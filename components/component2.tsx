import type { NextPage } from "next";
import Component4 from "./component4";

export type Component2Type = {
  className?: string;
};

const Component2: NextPage<Component2Type> = ({ className = "" }) => {
  return (
    <div
      className={`max-w-full flex flex-col items-start justify-start gap-[15px] leading-[normal] tracking-[normal] text-left text-xs text-neutral-black font-inter ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-[76px] box-border max-w-full mq410:pl-5 mq410:pr-5 mq410:box-border">
        <div className="w-[258px] flex flex-row items-start justify-between gap-5">
          <a className="[text-decoration:none] relative font-light text-[inherit] inline-block min-w-[41px]">
            default
          </a>
          <a className="[text-decoration:none] relative font-light text-[inherit] inline-block min-w-[33px]">
            hover
          </a>
        </div>
      </div>
      <section className="w-[474px] h-[100px] rounded-8xs bg-whitesmoke border-neutral-black border-[0.5px] border-dashed box-border flex flex-row items-start justify-start p-[30px] gap-[30px]">
        <Component4 variant={1} text="Wonderland Studio" />
        <Component4
          variant={1}
          text="Wonderland Studio"
          variant1hoverfalseHeight="unset"
        />
      </section>
    </div>
  );
};

export default Component2;
