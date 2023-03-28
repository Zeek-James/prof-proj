import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face{
        font-family:"Inter";
        src: url("/fonts/Inter.ttf");
        font-display:swap;
    }

    body{
        font-family: Inter
    }
`;
