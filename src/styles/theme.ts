import { ThemeOverride, extendTheme } from "@chakra-ui/react";

export const theme: ThemeOverride = extendTheme({
  fonts: {
    body: "Monument Extended",
  },
  color: {
    primary: "#000000",
    secondary: "#0000FF",
  },
  styles: {
    global: {
      body: {
        fontFamily: "body",
        color: "primary",
        background: "white",
        overflow: "hidden",
        overscrollBehavior: "none",
        "::-webkit-scrollbar": {
          display: "none",
        },
        margin: 0,
        padding: 0,
      },
    },
  },
});