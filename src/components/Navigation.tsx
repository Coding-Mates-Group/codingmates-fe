import React from "react";
import LogoSVG from "../public/logo.svg";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav
      className={`h-16 flex items-center justify-between w-full xl:max-w-[1280px] lg:m-auto`}
    >
      <Link href="/">
        <a>
          <LogoSVG className={`w-[296px] h-[52px]`} />
        </a>
      </Link>
      <div className="flex items-center gap-3">
        <input
          type="text"
          className={`h-10 bg-white border-b outline-none border-black`}
        />
        <button type="button" className="btn-dft">
          login
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
