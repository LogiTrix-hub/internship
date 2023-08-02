import { Meta, StoryObj } from "@storybook/react";
import { BaseInput } from "./index";


const meta: Meta<typeof BaseInput> = {
  component: BaseInput
}
export default meta;
type Story = StoryObj<typeof BaseInput>;

export const WithoutLabel: Story = {
  name: 'Without label',
  args: {
    placeholder: 'Some placeholder',
  }
}

export const WithLabel: Story = {
  name: 'With label',
  args: {
    placeholder: 'Some placeholder',
    label: 'Some label',
  }
}