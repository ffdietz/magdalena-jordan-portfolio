import { ThemeOverride, extendTheme } from "@chakra-ui/react";

export const theme: ThemeOverride = extendTheme({
  fonts: {
    body: "Monument Extended, system-ui, sans-serif"
  },
  colors: {
    primaryColor: "black",
    secondaryColor: "#00F",
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
        fontFamily: "body",
        margin: 0,
        padding: 0,
        color: "primaryColor",
        background: "white",
        overscrollBehavior: "none",
      },
    },
  },
});