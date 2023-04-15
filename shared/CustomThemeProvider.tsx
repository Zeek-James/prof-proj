import React, { ReactNode } from "react";
import { theme } from "../styles/themes";
import { ThemeProvider } from "styled-components";

type ThemeProps = {
  children: ReactNode;
};

const CustomThemeProvider = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={theme}>{children} </ThemeProvider>;
};

export default CustomThemeProvider;
