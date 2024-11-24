import type { NextPage } from "next";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-6 text-left text-xs text-gray1-200 font-inter ${className}`}
    >
      <a className="[text-decoration:none] relative font-light text-[inherit]">
        <p className="m-0">variant</p>
        <p className="m-0 text-neutral-black">1</p>
      </a>
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
      <div className="relative font-light">
        <p className="m-0">variant</p>
        <p className="m-0 text-neutral-black">7</p>
      </div>
      <div className="relative font-light">
        <p className="m-0">variant</p>
        <p className="m-0 text-neutral-black">8</p>
      </div>
      <div className="relative font-light">
        <p className="m-0">variant</p>
        <p className="m-0 text-neutral-black">9</p>
      </div>
      <div className="relative font-light">
        <p className="m-0">variant</p>
        <p className="m-0 text-neutral-black">10</p>
      </div>
      <div className="relative font-light">
        <p className="m-0">variant</p>
        <p className="m-0 text-neutral-black">11</p>
      </div>
      <div className="relative font-light">
        <p className="m-0">variant</p>
        <p className="m-0 text-neutral-black">12</p>
      </div>
    </div>
  );
};

export default FrameComponent2;
