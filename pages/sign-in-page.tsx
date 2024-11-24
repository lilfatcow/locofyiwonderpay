import type { NextPage } from "next";
import SignInContent from "../components/sign-in-content";
import FrameComponent from "../components/frame-component";

const SignInPage: NextPage = () => {
  return (
    <div className="w-full h-[1222px] relative bg-gray1-300 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq1050:h-auto">
      <main className="mt-[-26px] flex-1 bg-neutral-white flex flex-col items-start justify-start pt-[198px] pb-[502px] pl-[239px] pr-[204px] box-border gap-[73.5px] max-w-full text-center text-45xl text-neutral-black font-akatab lg:pt-[129px] lg:pb-[326px] lg:box-border mq450:gap-[18px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[37px] mq750:pt-[84px] mq750:pb-[212px] mq750:pl-[119px] mq750:pr-[102px] mq750:box-border">
        <div className="w-[31px] h-[30px] relative hidden" />
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.04em] leading-[72px] font-extrabold font-inherit mq450:text-19xl mq450:leading-[43px] mq1050:text-32xl mq1050:leading-[58px]">
          Sign In
        </h1>
        <SignInContent />
        <FrameComponent />
      </main>
    </div>
  );
};

export default SignInPage;
