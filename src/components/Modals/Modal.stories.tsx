import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Modal from "./Modal";
import Logo from "../svg/Logo";

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
    >
      <div>
        <Logo width={"16px"} height={"32px"} />
        <div>
          <h1>Welcome to Coding Mates</h1>
          <button type="button">Facebook login</button>
          <button type="button"></button>
          <button type="button"></button>
        </div>
      </div>
    </Modal>
  );
};
