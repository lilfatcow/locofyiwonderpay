import type { NextPage } from "next";
import Header from "../components/header";

const LandingPage: NextPage = () => {
  return (
    <div className="w-full relative bg-neutral-white overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <header className="flex-1 bg-neutral-white overflow-hidden flex flex-col items-start justify-start pt-[52px] px-[218px] pb-[434px] box-border gap-[97px] max-w-full mq450:gap-6 mq450:pl-5 mq450:pr-5 mq450:box-border mq950:gap-12 mq950:pt-[34px] mq950:px-[109px] mq950:pb-[282px] mq950:box-border">
        <div className="w-[1200px] h-[1200px] relative hidden max-w-full" />
        <div className="w-[1440px] h-[900px] relative hidden opacity-[0.2] mix-blend-overlay max-w-full" />
        <nav className="m-0 self-stretch flex flex-row items-start justify-center py-0 pl-0 pr-2 box-border max-w-full">
          <nav className="m-0 w-[386px] flex flex-row items-start justify-between max-w-full gap-5 text-left text-lg text-neutral-black font-akatab">
            <a className="[text-decoration:none] relative tracking-[-0.02em] leading-[24px] text-[inherit] inline-block min-w-[74px] z-[2]">
              <ul className="m-0 font-inherit text-inherit pl-6">
                <li>About</li>
              </ul>
            </a>
            <a className="[text-decoration:none] relative tracking-[-0.02em] leading-[24px] text-[inherit] inline-block min-w-[66px] z-[2]">
              Features
            </a>
            <a className="[text-decoration:none] relative tracking-[-0.02em] leading-[24px] text-[inherit] inline-block min-w-[55px] z-[2]">
              Inquire
            </a>
            <a className="[text-decoration:none] relative tracking-[-0.02em] leading-[24px] text-[inherit] inline-block min-w-[51px] z-[2]">
              Studio
            </a>
          </nav>
        </nav>
        <Header />
      </header>
    </div>
  );
};

export default LandingPage;
