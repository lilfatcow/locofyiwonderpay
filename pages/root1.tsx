import type { NextPage } from "next";
import Image from "next/image";

const Root1: NextPage = () => {
  return (
    <div className="w-full relative bg-gray1-300 flex flex-col items-start justify-start pt-[124px] pb-[107px] pl-[105px] pr-[49px] box-border leading-[normal] tracking-[normal] text-left text-mid-1 text-silver-200 font-inter mq450:pl-5 mq450:pr-5 mq450:box-border">
      <div className="absolute !m-[0] bottom-[-23px] left-[176px] font-semibold inline-block min-w-[56px] z-[2]">
        April 5
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-5 text-xl-2 text-dimgray-100 mq600:flex-wrap">
        <div className="w-[254px] flex flex-row items-start justify-start gap-4">
          <Image
            className="h-[55px] w-[55px] relative rounded-[14.5px] object-cover z-[2]"
            width={55}
            height={55}
            alt=""
            src="/image@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-1.5">
            <a className="[text-decoration:none] relative font-semibold text-[inherit] z-[2] mq450:text-base">
              Accounts Payable
            </a>
            <div className="relative text-mid-1 font-semibold text-silver-100 inline-block min-w-[56px] z-[2]">
              April 7
            </div>
          </div>
        </div>
        <div className="w-[152px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border text-5xl-2 text-mediumseagreen">
          <div className="self-stretch flex flex-row items-end justify-start gap-[7px]">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
              <Image
                className="w-3.5 h-[13px] relative object-cover z-[2]"
                loading="lazy"
                width={14}
                height={13}
                alt=""
                src="/image-1@2x.png"
              />
            </div>
            <a className="[text-decoration:none] flex-1 relative font-semibold text-[inherit] z-[2] mq450:text-lgi">
              $2049.00
            </a>
          </div>
        </div>
      </div>
      <section className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full text-left text-5xl-2 text-darkslategray-100 font-inter">
        <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start max-w-full">
          <Image
            className="h-[359px] flex-1 relative max-w-full overflow-hidden object-cover"
            width={644}
            height={359}
            alt=""
            src="/image-2@2x.png"
          />
          <Image
            className="h-[122px] w-[556px] absolute !m-[0] right-[15px] bottom-[14px] object-cover z-[1]"
            width={556}
            height={122}
            alt=""
            src="/background@2x.png"
          />
          <div className="absolute !m-[0] right-[49px] bottom-[62px] font-semibold inline-block min-w-[94px] whitespace-nowrap z-[2] mq450:text-lgi">
            $50.00
          </div>
          <a className="[text-decoration:none] h-[91px] w-[232px] absolute !m-[0] bottom-[47px] left-[178px] text-xl-2 font-semibold text-dimgray-300 flex items-center z-[2] mq450:text-base">{`Accounts Receivable `}</a>
          <Image
            className="h-[54px] w-[54px] absolute !m-[0] bottom-[47px] left-[104px] rounded-[27.5px] object-cover z-[2]"
            loading="lazy"
            width={54}
            height={54}
            alt=""
            src="/image-3@2x.png"
          />
        </div>
        <Image
          className="absolute top-[87px] left-[76px] w-[553px] h-[124px] object-cover z-[1]"
          width={553}
          height={124}
          alt=""
          src="/background-1@2x.png"
        />
        <Image
          className="absolute top-[0px] left-[632px] w-3 h-[17px] object-cover z-[1]"
          loading="lazy"
          width={12}
          height={17}
          alt=""
          src="/image-4@2x.png"
        />
      </section>
    </div>
  );
};

export default Root1;
