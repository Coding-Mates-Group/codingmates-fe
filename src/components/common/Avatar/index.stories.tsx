import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar, { AvatarProps } from '@/components/common/Avatar';
import image from '/public/images/hero_image.png';

export default {
  title: 'Components/common/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      description: 'Size of Avatar',
      table: { defaultValue: { summary: 'medium' } },
      control: { type: 'radio', options: ['small', 'medium', 'large'] },
    },
    src: {
      description: 'Src of image',
      table: { defaultValue: { summary: '' } },
      control: false,
    },
  },
} as ComponentMeta<typeof Avatar>;

const defaultArgs: AvatarProps = {
  size: 'medium',
  src: image,
};

const Template: ComponentStory<typeof Avatar> = (args: AvatarProps) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  ...defaultArgs,
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  ...defaultArgs,
  size: 'large',
};
