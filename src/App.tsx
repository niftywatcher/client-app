import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        boxSizing: "border-box",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>hello world</div>
    </ChakraProvider>
  );
}

export default App;
