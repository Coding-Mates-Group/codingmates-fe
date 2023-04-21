import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar from '@/components/layout/Navbar';

export default {
  title: 'Components/layout/Navbar',
  component: Navbar,
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Default = Template.bind({});
Default.args = {};
