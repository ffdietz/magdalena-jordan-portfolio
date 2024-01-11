import { ThemeOverride, extendTheme } from "@chakra-ui/react";

export const theme: ThemeOverride = extendTheme({
  fonts: {
    body: "Monument Extended",
  },
  color: {
    primaryColor: "black",
    secondaryColor: "blue",
  },
  styles: {
    global: {
      body: {
        fontFamily: "body",
        color: "primary",
        background: "white",
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