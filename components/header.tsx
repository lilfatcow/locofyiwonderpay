import type { NextPage } from "next";
import Image from "next/image";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-1.5 max-w-full text-center text-45xl text-neutral-black font-abril-fatface ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border max-w-full">
        <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.04em] leading-[72px] font-normal font-inherit inline-block max-w-full z-[2] mq450:text-19xl mq450:leading-[43px] mq950:text-32xl mq950:leading-[58px]">
          WonderPay
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-4 text-xs font-akatab">
        <div className="self-stretch relative tracking-[0.16em] leading-[16px] uppercase z-[2]">
          By Wonderland Studio
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <Image
            className="h-10 w-[74px] relative object-cover z-[2]"
            loading="lazy"
            width={74}
            height={40}
            alt=""
            src="/image@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[51px] box-border min-h-[73px] max-w-full text-left text-base text-gray-900 font-inter mq975:pl-[25px] mq975:pr-[25px] mq975:box-border">
        <div className="w-[863px] relative tracking-[-0.02em] leading-[150%] flex items-center shrink-0 max-w-full z-[2]">{`WonderPay by Wonderland Studio is a private bill pay and payments automation platform to streamline AP & AR and offer working capital solutions for our clients, partners and colleagues in music, entertainment and luxury hospitality.`}</div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[27px]">
        <div className="flex flex-row items-start justify-start gap-[21px]">
          <button className="cursor-pointer [border:none] py-3 pl-6 pr-[23px] bg-neutral-black rounded-80xl flex flex-row items-start justify-start z-[2] hover:bg-darkslategray-200">
            <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-akatab text-neutral-white text-left inline-block min-w-[49px]">
              Log In
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-3 pl-6 pr-[23px] bg-miscellaneous-sidebar-text-selected rounded-80xl flex flex-row items-start justify-start z-[2] hover:bg-cornflowerblue">
            <div className="relative text-lg tracking-[-0.02em] leading-[24px] font-akatab text-neutral-white text-left inline-block min-w-[55px]">
              Inquire
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
