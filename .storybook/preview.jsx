// import { StoryFn as StoryType } from "@storybook/react";
import { GlobalStyles } from "../styles/GlobalStyles";
import { NavigationProvider } from "../context/Navigation";
import { decorator } from "../__mocks__/next/router";
import CustomThemeProvider from "../shared/CustomThemeProvider";

export const decorators = [
  (Story) => (
    // (Story: StoryType) => (
    <CustomThemeProvider>
      <NavigationProvider>
        <GlobalStyles />
        <Story />
      </NavigationProvider>
    </CustomThemeProvider>
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
