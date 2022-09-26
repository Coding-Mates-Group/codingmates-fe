import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => {
  const handleClick = () => console.log("clicked!");
  return (
    <Button onClick={handleClick} type="button">
      button
    </Button>
  );
};
