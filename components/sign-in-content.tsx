import type { NextPage } from "next";

export type SignInContentType = {
  className?: string;
};

const SignInContent: NextPage<SignInContentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[277px] flex flex-row items-start justify-start py-0 pl-[77px] pr-[83px] box-border max-w-full text-left text-8xl-5 text-dimgray-400 font-akatab mq1050:pl-[38px] mq1050:pr-[41px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-16 max-w-full mq450:gap-4 mq1050:gap-8">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pl-px pr-[5px] box-border max-w-full">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
            <div className="relative font-semibold inline-block min-w-[74px] mq450:text-3xl">
              Email
            </div>
            <div className="self-stretch flex-1 rounded-tl-10xs rounded-tr-none rounded-b-10xs bg-neutral-white border-lavender border-[2px] border-solid box-border flex flex-row items-start justify-start pt-5 px-[34px] pb-[22px] max-w-full">
              <div className="h-[89px] w-[830px] relative rounded-tl-10xs rounded-tr-none rounded-b-10xs bg-neutral-white border-lavender border-[2px] border-solid box-border hidden max-w-full" />
              <input
                className="w-[281px] [border:none] [outline:none] font-semibold font-akatab text-8xl-2 bg-[transparent] h-[41px] relative text-lightsteelblue text-left flex items-center p-0 z-[1] mq450:text-3xl"
                placeholder="name@example.com"
                type="text"
              />
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-[19px] pb-4 pl-[355px] pr-[353px] bg-neutral-black self-stretch rounded-10xs flex flex-row items-start justify-center box-border max-w-full hover:bg-darkslategray-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[72px] w-[836px] relative rounded-10xs bg-neutral-black hidden max-w-full" />
          <div className="flex-1 relative text-9xl-5 font-semibold font-akatab text-ghostwhite-200 text-left z-[1] mq450:text-4xl">
            Continue
          </div>
        </button>
      </div>
    </section>
  );
};

export default SignInContent;
