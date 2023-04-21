import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from '@/components/layout/Footer';

export default {
  title: 'Components/layout/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
Default.args = {};
