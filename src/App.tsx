import React from "react";
import { chakra, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SplitView from "./components/SplitView";
import theme from "./theme";
import CollectionList from "./components/CollectionList/index";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <chakra.main height="calc(100vh - 144px)" overflow="hidden">
          <SplitView
            left={<Navigation />}
            right={<CollectionList />}
            align="flex-start"
          />
        </chakra.main>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
