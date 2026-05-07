import { ThemeProvider as SThemeProvider } from "styled-components";
import type { PropsWithChildren } from "react";

const styledTheme = {
  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
  },
};

export const MainThemeProvider = ({ children }: PropsWithChildren) => (
  <SThemeProvider theme={styledTheme}>{children}</SThemeProvider>
);
