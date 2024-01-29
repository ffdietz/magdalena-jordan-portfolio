import { ThemeOverride, extendTheme } from "@chakra-ui/react";

export const theme: ThemeOverride = extendTheme({
  fonts: {
    body: "Monument Extended",
  },
  colors: {
    primaryColor: "black",
    secondaryColor: "blue",
  },
  styles: {
    global: {
      body: {
        minHeight: "100dvh",
        position: "static",
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