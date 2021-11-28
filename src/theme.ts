import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import colors from "./Shared/utils/colors";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      "html, body": {
        boxSizing: "border-box",
        fontFamily: "Roboto Mono",
      },
      body: {
        backgroundColor: mode(
          colors.backgroundLight,
          colors.backgroundDark
        )(props),
      },
    }),
  },
});

export default theme;
