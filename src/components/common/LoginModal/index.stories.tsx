import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import LoginModal from '@/components/common/LoginModal';

export default {
  title: 'Components/common/LoginModal',
  component: LoginModal,
  argTypes: {
    setIsOpen: {
      description: 'setIsOpen function ',
    },
  },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = () => {
  const [isOpen, setIsOpen] = useState(true);
  return <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
};

export const Default = Template.bind({});
Default.args = {};
