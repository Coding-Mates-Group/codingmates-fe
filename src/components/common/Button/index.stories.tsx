import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { ButtonProps } from '@/components/common/Button';

export default {
  title: 'Components/common/Button',
  component: Button,
  argTypes: {
    onClick: { description: 'onClick function', action: 'onClick' },
    children: {
      description: 'Content of Button',
      table: { defaultValue: { summary: 'Button' } },
    },
    paddingX: {
      description: 'Left, right padding of Button',
      table: { defaultValue: { summary: 'px-16' } },
      control: false,
    },
    paddingY: {
      description: 'Top, bottom padding of Button',
      table: { defaultValue: { summary: 'py-12' } },
      control: false,
    },
    type: {
      description: 'Type of Button',
      table: { defaultValue: { summary: 'primary' } },
      control: { type: 'radio', options: ['primary', 'secondary', 'ghost', 'text', 'danger'] },
    },
    htmlType: {
      description: 'Html type of button element',
      table: { defaultValue: { summary: 'button' } },
      control: { type: 'radio', options: ['button', 'reset', 'submit'] },
    },
    disabled: {
      description: 'Disabled of Button',
      table: { defaultValue: { summary: 'false' } },
    },
  },
} as ComponentMeta<typeof Button>;

const defaultArgs: ButtonProps = {
  children: 'Button',
  paddingX: 'px-16',
  paddingY: 'py-12',
  type: 'primary',
  htmlType: 'button',
  disabled: false,
};

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  type: 'secondary',
};

export const Ghost = Template.bind({});
Ghost.args = {
  ...defaultArgs,
  type: 'ghost',
};

export const Text = Template.bind({});
Text.args = {
  ...defaultArgs,
  type: 'text',
};

export const Danger = Template.bind({});
Danger.args = {
  ...defaultArgs,
  type: 'danger',
};
