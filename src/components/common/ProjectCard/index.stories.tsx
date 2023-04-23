import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProjectCard from '@/components/common/ProjectCard';

export default {
  title: 'Components/common/ProjectCard',
  component: ProjectCard,
  argTypes: {},
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = () => <ProjectCard />;

export const Default = Template.bind({});
Default.args = {};
