import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type Component5Type = {
  className?: string;
  text?: string;
  component1: string;

  /** Variant props */
  variant?: 1 | 2 | 3 | 4 | 5 | 6;

  /** Style props */
  variant1hoverfalseHeight?: CSSProperties["height"];
};

const Component5: NextPage<Component5Type> = ({
  className = "",
  variant = 1,
  text = "For you",
  variant1hoverfalseHeight,
  component1,
}) => {
  const variant1hoverfalseStyle: CSSProperties = useMemo(() => {
    return {
      height: variant1hoverfalseHeight,
    };
  }, [variant1hoverfalseHeight]);

  return (
    <button
      className={`cursor-pointer [border:none] py-2 pl-2 pr-4 bg-[transparent] rounded-9980xl [background:linear-gradient(0deg,_rgba(0,_0,_0,_0),_rgba(241,_242,_243,_0.1)),_#0c0d0e] overflow-hidden flex flex-row items-center justify-start box-border gap-2 max-w-[215.86px] z-[2] data-[variant='2']:[border:unset] data-[variant='2']:bg-[unset] data-[variant='2']:[background:unset] data-[variant='3']:[border:unset] data-[variant='3']:bg-[unset] data-[variant='3']:[background:unset] data-[variant='4']:[border:unset] data-[variant='4']:bg-[unset] data-[variant='4']:[background:unset] data-[variant='5']:[border:unset] data-[variant='5']:bg-[unset] data-[variant='5']:[background:unset] data-[variant='6']:[border:unset] data-[variant='6']:bg-[unset] data-[variant='6']:[background:unset] [&_.component-1-icon]:data-[variant='2']:m-0 [&_.component-1-icon]:data-[variant='3']:m-0 [&_.text]:data-[variant='2']:text-slategray [&_.text]:data-[variant='3']:[text-decoration:unset] [&_.text]:data-[variant='3']:text-slategray [&_.text]:data-[variant='4']:[text-decoration:unset] [&_.text]:data-[variant='4']:text-slategray [&_.text]:data-[variant='5']:[text-decoration:unset] [&_.text]:data-[variant='5']:text-slategray [&_.text]:data-[variant='6']:[text-decoration:unset] [&_.text]:data-[variant='6']:text-slategray data-[variant='1']:hover:[background:linear-gradient(0deg,_rgba(0,_0,_0,_0),_rgba(241,_242,_243,_0.1)),_#232629] data-[variant='1']:hover:z-[1] data-[variant='2']:hover:[border:none] data-[variant='2']:hover:bg-gainsboro-100 data-[variant='2']:hover:[background:unset] data-[variant='2']:hover:z-[1] data-[variant='3']:hover:[border:none] data-[variant='3']:hover:bg-gainsboro-100 data-[variant='3']:hover:[background:unset] data-[variant='3']:hover:z-[1] data-[variant='4']:hover:[border:none] data-[variant='4']:hover:bg-gainsboro-100 data-[variant='4']:hover:[background:unset] data-[variant='4']:hover:z-[1] data-[variant='5']:hover:[border:none] data-[variant='5']:hover:bg-gainsboro-100 data-[variant='5']:hover:[background:unset] data-[variant='5']:hover:z-[1] data-[variant='6']:hover:[border:none] data-[variant='6']:hover:bg-gainsboro-100 data-[variant='6']:hover:[background:unset] data-[variant='6']:hover:z-[1] [&_.component-1-icon]:data-[variant='3']:hover:m-0 [&_.text]:data-[variant='2']:hover:text-gray1-100 [&_.text]:data-[variant='3']:hover:[text-decoration:unset] [&_.text]:data-[variant='3']:hover:text-gray1-100 [&_.text]:data-[variant='4']:hover:[text-decoration:unset] [&_.text]:data-[variant='4']:hover:text-gray1-100 [&_.text]:data-[variant='5']:hover:[text-decoration:unset] [&_.text]:data-[variant='5']:hover:text-gray1-100 [&_.text]:data-[variant='6']:hover:[text-decoration:unset] [&_.text]:data-[variant='6']:hover:text-gray1-100 ${className}`}
      data-variant={variant}
      style={variant1hoverfalseStyle}
    >
      <Image
        className="component-1-icon w-6 relative h-6"
        width={24}
        height={24}
        alt=""
        src={component1}
      />
      <div className="overflow-hidden flex flex-col items-start justify-start">
        <a className="text [text-decoration:none] relative text-mini-9 leading-[24px] font-inter text-neutral-white text-left">
          {text}
        </a>
      </div>
    </button>
  );
};

export default Component5;
