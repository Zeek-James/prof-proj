// import { StoryFn as StoryType } from "@storybook/react";
import { GlobalStyles } from "../styles/GlobalStyles";
import { NavigationProvider } from "../context/Navigation";
import { decorator } from "../__mocks__/next/router";

export const decorators = [
  (Story) => (
    // (Story: StoryType) => (
    <NavigationProvider>
      <GlobalStyles />
      <Story />
    </NavigationProvider>
  ),
  decorator,
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
