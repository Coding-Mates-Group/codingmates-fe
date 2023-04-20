import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import TextInput, { TextInputProps } from '@/components/common/TextInput';

export default {
  title: 'Components/common/TextInput',
  component: TextInput,
  argTypes: {
    value: {
      description: 'Input state',
      control: false,
    },
    onClear: {
      description: 'SetInput function',
    },
    onChange: {
      description: 'OnChange of input',
    },
    width: {
      description: 'Width of TextInput',
      table: { defaultValue: { summary: 'w-[30rem]' } },
      control: false,
    },
    placeholder: {
      description: 'Placeholder of TextInput',
      table: { defaultValue: { summary: '' } },
    },
  },
} as ComponentMeta<typeof TextInput>;

const defaultArgs = {
  value: '',
  setInput: () => null,
  onChange: () => null,
  width: 'w-[30rem]',
  placeholder: 'Example placeholder.',
};

const Template: ComponentStory<typeof TextInput> = (args: TextInputProps) => {
  const [input, setInput] = useState('');
  return (
    <TextInput
      {...args}
      value={input}
      onClear={() => setInput('')}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export const Empty = Template.bind({});
Empty.args = {
  ...defaultArgs,
};

export const Filled = Template.bind({});
Filled.args = {
  ...defaultArgs,
};
Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByRole('textbox'), 'Text Filled');
  await expect(canvas.getByRole('textbox')).toBeInTheDocument();
};

export const LongText = Template.bind({});
LongText.args = {
  ...defaultArgs,
};
LongText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(
    canvas.getByRole('textbox'),
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi cupiditate, repellat iure culpa cumque aperiam id eos illo quo dolorum, reprehenderit minima aut consectetur fugit sunt officia. Praesentium, inventore corporis!'
  );
};

export const ClickedCancel = Template.bind({});
ClickedCancel.args = {
  ...defaultArgs,
};
ClickedCancel.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByRole('textbox'), 'Text');
  await expect(canvas.getByDisplayValue('Text')).toBeInTheDocument();

  await userEvent.click(canvas.getByRole('button'));
  await expect(canvas.queryByDisplayValue('Text')).not.toBeInTheDocument();
};
