import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import CookieModal from '@/components/common/CookieModal';

export default {
  title: 'Components/common/CookieModal',
  component: CookieModal,
  argTypes: {
    setIsOpen: {
      description: 'setIsOpen function ',
    },
  },
} as ComponentMeta<typeof CookieModal>;

const Template: ComponentStory<typeof CookieModal> = () => {
  const [isOpen, setIsOpen] = useState(true);
  return <CookieModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
};

export const Default = Template.bind({});
Default.args = {};
