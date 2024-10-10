import { Button } from "@acme/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <div
      style={{
        display: "flex",
        gap: "5px",
        alignItems: "center",
      }}
    >
      <Button
        {...props}
        onClick={(): void => {
          // eslint-disable-next-line no-alert -- alert for demo
          alert("Hello from Turborepo!");
        }}
      >
        Large
      </Button>
      <Button
        {...props}
        size="md"
        onClick={(): void => {
          // eslint-disable-next-line no-alert -- alert for demo
          alert("Hello from Turborepo!");
        }}
      >
        Medium
      </Button>
      <Button
        {...props}
        size="sm"
        onClick={(): void => {
          // eslint-disable-next-line no-alert -- alert for demo
          alert("Hello from Turborepo!");
        }}
      >
        Small
      </Button>
    </div>
  ),
  name: "Button",
  args: {
    type: "button",
    disabled: false,
  },
};
