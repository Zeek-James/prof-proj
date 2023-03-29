// import { StoryFn as StoryType } from "@storybook/react";
import { GlobalStyles } from "../styles/GlobalStyles";
// import { decorator } from "../__mocks__/next/router";

export const decorators = [
  (Story) => (
    // (Story: StoryType) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
  // decorator,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
