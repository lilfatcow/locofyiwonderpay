import type { NextPage } from "next";
import FrameComponent1 from "../components/frame-component1";

const WonderDash: NextPage = () => {
  return (
    <div className="w-full h-[1222px] relative bg-gray1-300 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="mt-[-22px] flex-1 bg-neutral-white flex flex-col items-end justify-start pt-[158px] pb-[511px] pl-[76px] pr-[677px] box-border gap-[623px] max-w-full lg:pt-[103px] lg:pb-[332px] lg:box-border mq450:gap-[156px] mq450:pr-5 mq450:box-border mq750:gap-[311px] mq750:pt-[67px] mq750:pb-[216px] mq750:pl-[38px] mq750:pr-[338px] mq750:box-border">
        <div className="self-stretch flex flex-row items-start justify-start">
          <FrameComponent1 />
        </div>
        <div className="w-[31px] h-[30px] relative" />
      </main>
    </div>
  );
};

export default WonderDash;
