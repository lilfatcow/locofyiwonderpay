import type { NextPage } from "next";
import Component5 from "./component5";
import FrameComponent3 from "./frame-component3";

export type Component3Type = {
  className?: string;
};

const Component3: NextPage<Component3Type> = ({ className = "" }) => {
  return (
    <div
      className={`max-w-full flex flex-row items-end justify-start gap-[81px] leading-[normal] tracking-[normal] text-left text-xs text-gray1-200 font-inter mq439:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[35px]">
        <div className="flex flex-col items-start justify-start gap-10">
          <div className="relative font-light">
            <p className="m-0">variant</p>
            <p className="m-0 text-neutral-black">1</p>
          </div>
          <div className="relative font-light">
            <p className="m-0">variant</p>
            <p className="m-0 text-neutral-black">2</p>
          </div>
          <div className="relative font-light">
            <p className="m-0">variant</p>
            <p className="m-0 text-neutral-black">3</p>
          </div>
          <div className="relative font-light">
            <p className="m-0">variant</p>
            <p className="m-0 text-neutral-black">4</p>
          </div>
          <div className="relative font-light">
            <p className="m-0">variant</p>
            <p className="m-0 text-neutral-black">5</p>
          </div>
          <div className="relative font-light">
            <p className="m-0">variant</p>
            <p className="m-0 text-neutral-black">6</p>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-start justify-start gap-[15px] max-w-full text-left text-xs text-neutral-black font-inter">
        <div className="flex flex-row items-start justify-start py-0 px-[43px] mq278:pl-5 mq278:pr-5 mq278:box-border">
          <div className="w-48 flex flex-row items-start justify-between gap-5">
            <a className="[text-decoration:none] relative font-light text-[inherit] inline-block min-w-[41px]">
              default
            </a>
            <a className="[text-decoration:none] relative font-light text-[inherit] inline-block min-w-[33px]">
              hover
            </a>
          </div>
        </div>
        <div className="w-[342px] h-[450px] rounded-8xs bg-whitesmoke border-neutral-black border-[0.5px] border-dashed box-border flex flex-col items-start justify-start p-[30px] gap-[30px]">
          <div className="w-[265px] h-10 flex flex-row items-start justify-start gap-[47px]">
            <Component5
              variant={1}
              text="For you"
              component1="/component-1-1.svg"
            />
            <Component5
              variant={1}
              text="For you"
              variant1hoverfalseHeight="unset"
              component1="/component-1-1.svg"
            />
          </div>
          <FrameComponent3 />
        </div>
      </section>
    </div>
  );
};

export default Component3;
