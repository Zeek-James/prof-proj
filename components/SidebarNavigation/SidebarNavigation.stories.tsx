import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SidebarNavigation } from "./SidebarNavigation";
import { Routes } from "../../config/routes";

export default {
  title: "UI/SidebarNavigation",
  component: SidebarNavigation,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SidebarNavigation>;

const Template: ComponentStory<typeof SidebarNavigation> = () => (
  <SidebarNavigation />
);

export const Default = Template.bind({});
Default.parameters = {
  route: Routes.projects,
};
