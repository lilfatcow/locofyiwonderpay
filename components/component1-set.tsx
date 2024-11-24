import type { NextPage } from "next";
import Image from "next/image";

export type Component1SetType = {
  className?: string;
};

const Component1Set: NextPage<Component1SetType> = ({ className = "" }) => {
  return (
    <section
      className={`h-[678px] w-[180px] rounded-8xs bg-whitesmoke border-neutral-black border-[0.5px] border-dashed box-border flex flex-col items-start justify-start p-[30px] gap-[30px] ${className}`}
    >
      <input className="m-0 w-6 h-6 relative" type="checkbox" />
      <Image
        className="w-6 h-6 relative"
        loading="lazy"
        width={24}
        height={24}
        alt=""
        src="/component-1-1.svg"
      />
      <Image
        className="w-6 h-6 relative"
        loading="lazy"
        width={24}
        height={24}
        alt=""
        src="/variant3.svg"
      />
      <input className="m-0 w-6 h-6 relative" type="checkbox" />
      <input className="m-0 w-6 h-6 relative" type="checkbox" />
      <input className="m-0 w-6 h-6 relative" type="checkbox" />
      <Image
        className="w-6 h-6 relative"
        loading="lazy"
        width={24}
        height={24}
        alt=""
        src="/variant7.svg"
      />
      <Image
        className="w-6 h-6 relative"
        loading="lazy"
        width={24}
        height={24}
        alt=""
        src="/component-1-4.svg"
      />
      <Image
        className="w-6 h-6 relative"
        loading="lazy"
        width={24}
        height={24}
        alt=""
        src="/variant9.svg"
      />
      <Image
        className="w-6 h-6 relative"
        loading="lazy"
        width={24}
        height={24}
        alt=""
        src="/component-1-5.svg"
      />
      <Image
        className="w-6 h-6 relative"
        loading="lazy"
        width={24}
        height={24}
        alt=""
        src="/variant11.svg"
      />
      <Image
        className="w-6 h-6 relative"
        loading="lazy"
        width={24}
        height={24}
        alt=""
        src="/component-1-6.svg"
      />
    </section>
  );
};

export default Component1Set;
