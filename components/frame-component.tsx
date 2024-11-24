import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-start py-0 px-[77px] box-border max-w-full text-left text-xl-3 text-darkgray font-akatab mq1050:pl-[38px] mq1050:pr-[38px] mq1050:box-border ${className}`}
    >
      <div className="w-[832px] flex flex-col items-end justify-start gap-12 max-w-full mq450:gap-6">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0.5 pr-px box-border max-w-full">
          <button className="cursor-pointer [border:none] pt-[18px] pb-5 pl-[276px] pr-[272px] bg-ghostwhite-100 flex-1 rounded-3xs flex flex-row items-start justify-center box-border max-w-full hover:bg-gainsboro-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-20 w-[829px] relative rounded-3xs bg-ghostwhite-100 hidden max-w-full" />
            <div className="flex-1 relative text-8xl-7 font-semibold font-akatab text-dimgray-600 text-left z-[1] mq450:text-3xl">
              Sign in with passkey
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start flex-wrap content-end pt-0 px-0 pb-[3px] gap-[30.5px] mq450:gap-[15px]">
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border min-w-[205px]">
            <Image
              className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              width={315}
              height={2}
              alt=""
              src="/background@2x.png"
            />
          </div>
          <div className="w-[142px] relative font-semibold flex items-center shrink-0 mq450:text-base">
            or sign in with
          </div>
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border min-w-[205px]">
            <Image
              className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              width={315}
              height={2}
              alt=""
              src="/background@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start pt-0 px-0 pb-[15px] box-border gap-8 max-w-full text-9xl-6 text-dimgray-200 mq450:gap-4">
          <div className="w-[391px] rounded-smi bg-ghostwhite-100 flex flex-row items-end justify-start pt-5 px-[131px] pb-[21px] box-border gap-[19px] max-w-full mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-20 w-[391px] relative rounded-smi bg-ghostwhite-100 hidden max-w-full" />
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
              <Image
                className="w-[26px] h-8 relative object-cover z-[1]"
                width={26}
                height={32}
                alt=""
                src="/image1@2x.png"
              />
            </div>
            <div className="flex-1 relative font-semibold inline-block min-w-[55px] z-[1] mq450:text-4xl">
              Apple
            </div>
          </div>
          <div className="flex-1 rounded-smi bg-ghostwhite-100 flex flex-row items-end justify-start pt-5 px-[130px] pb-[21px] box-border gap-[19px] min-w-[266px] max-w-full text-8xl-7 text-dimgray-500 mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-20 w-[409px] relative rounded-smi bg-ghostwhite-100 hidden max-w-full" />
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
              <Image
                className="w-7 h-7 relative object-cover z-[1]"
                loading="lazy"
                width={28}
                height={28}
                alt=""
                src="/image-11@2x.png"
              />
            </div>
            <div className="flex-1 relative font-semibold inline-block min-w-[65px] z-[1] mq450:text-3xl">
              Google
            </div>
          </div>
        </div>
        <div className="w-[821px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-lg text-neutral-black">
          <div className="flex flex-col items-start justify-start gap-[15px]">
            <div className="flex flex-row items-start justify-start py-0 px-[78px]">
              <Image
                className="h-[58px] w-[73px] relative object-cover z-[1]"
                loading="lazy"
                width={73}
                height={58}
                alt=""
                src="/image-21@2x.png"
              />
            </div>
            <div className="relative tracking-[-0.02em] leading-[24px] z-[1]">
              Powered by Wonderland Studio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
