import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Modal from "./Modal";
import Logo from "../svg/Logo";
import FacebookLogo from "../svg/FacebookLogo";
import GoogleLogo from "../svg/GoogleLogo";
import GithubLogo from "../svg/GithubLogo";
import Link from "next/link";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const CookieModal: ComponentStory<typeof Modal> = () => {
  return (
    <Modal
      open={true}
      closeModal={() => {
        return;
      }}
      title="We use Cookies 🍪"
    >
      <div className="text-center mt-4">
        <p className="text-[#1E1E1E]">
          This web site use cookies to ensure
          <br /> you get the best experience on our website
        </p>

        <button
          type="button"
          className={` mt-5 bg-[#9374EC]
          px-[66.5px] py-3 text-white rounded-[6px]
          shadow-elevation-3`}
        >
          Accept
        </button>
      </div>
    </Modal>
  );
};

export const LoginModal: ComponentStory<typeof Modal> = () => {
  return (
    <Modal
      open
      closeModal={() => {
        return;
      }}
      // title={`Welcome to Coding Mates!`}
    >
      <div className={`flex flex-col items-center`}>
        <h1 className="text-lg text-center font-bold leading-6 text-[#1E1E1E] flex flex-col items-center gap-1">
          <Logo width={"34px"} height={"32px"} />
          Welcome to Coding Mates!
        </h1>
        <div
          className={`flex flex-col gap-[10px] mt-8 w-[300px] font-UncutSans`}
        >
          <button
            type="button"
            className={`capitalize text-white bg-[#9374ec] flex gap-4 text-sm items-center justify-center py-3 rounded-[6px]`}
          >
            <FacebookLogo width={"22px"} height={"22px"} />
            Facebook login
          </button>
          <button
            type="button"
            className={`capitalize text-white bg-[#9374ec] flex gap-4 text-sm items-center justify-center px-[75px] py-3 rounded-[6px]`}
          >
            <GoogleLogo width={"24px"} height={"24px"} />
            Google login
          </button>
          <button
            type="button"
            className={`capitalize text-white bg-[#9374ec] flex gap-4 text-sm items-center justify-center px-[75px] py-3 rounded-[6px]`}
          >
            <GithubLogo width={"24px"} height={"24px"} />
            Github login
          </button>
        </div>

        <p
          className={`text-[#363639] mt-[36px] leading-[18px] font-UncutSans text-center
          text-sm
          w-[300px]`}
        >
          When you sign up with social login, you agree to the{" "}
          <Link href={`/`}>
            <a className={`underline font-medium`}>Terms of Use</a>
          </Link>{" "}
          and{" "}
          <Link href={`/`}>
            <a className={`underline font-medium`}>Privacy Policy</a>
          </Link>
          .
        </p>
      </div>
    </Modal>
  );
};
