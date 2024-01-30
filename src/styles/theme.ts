import { ThemeOverride, extendTheme } from "@chakra-ui/react";

export const theme: ThemeOverride = extendTheme({
  fonts: {
    body: "Monument Extended",
  },
  colors: {
    primaryColor: "black",
    secondaryColor: "blue",
  },
  semanticTokens: {
    sizes: {
      navHeight: {
        default: 12,
      },
    },
    space: {
      navPadding: {
        default: 12,
      },
    },
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