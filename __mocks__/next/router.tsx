import { Routes } from "../../config/routes";
import { Story as StoryType } from "@storybook/react";

type Params = { route: string };

let route = Routes.issues;

export function useRouter() {
  return { pathname: route };
}

export const decorator = (
  Story: StoryType,
  { parameters }: { parameters: Params }
) => {
  if (parameters && parameters.route) {
    route = parameters.route;
  }
  return <Story />;
};
