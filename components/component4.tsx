import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Component4Type = {
  className?: string;
  text?: string;

  /** Variant props */
  variant?: 1;

  /** Style props */
  variant1hoverfalseHeight?: CSSProperties["height"];
};

const Component4: NextPage<Component4Type> = ({
  className = "",
  variant = 1,
  text = "Wonderland Studio",
  variant1hoverfalseHeight,
}) => {
  const variant1hoverfalse1Style: CSSProperties = useMemo(() => {
    return {
      height: variant1hoverfalseHeight,
    };
  }, [variant1hoverfalseHeight]);

  return (
    <div
      className={`rounded-9980xl overflow-hidden flex flex-row items-center justify-start py-2 pl-2 pr-4 box-border relative gap-2 max-w-[215.86px] z-[2] text-left text-base-1 text-slategray font-inter data-[variant='1']:hover:z-[1] data-[variant='1']:hover:bg-gainsboro-100 [&_.content]:data-[variant='1']:hover:text-gray1-100 ${className}`}
      data-variant={variant}
      style={variant1hoverfalse1Style}
    >
      <input className="m-0 h-6 w-6 relative z-[0]" type="checkbox" />
      <div className="overflow-hidden flex flex-col items-start justify-start z-[1]">
        <a className="content [text-decoration:none] h-6 relative leading-[24px] text-[inherit] flex items-center">
          {text}
        </a>
      </div>
      <div className="h-[110%] w-[106.25%] absolute !m-[0] top-[-5%] right-[-3.12%] bottom-[-5%] left-[-3.12%] z-[2]" />
    </div>
  );
};

export default Component4;
