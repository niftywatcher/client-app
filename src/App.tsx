import React from "react";
import {
  Box,
  ChakraProvider,
  Container,
  extendTheme,
  VStack,
} from "@chakra-ui/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Collections from "./routes/collections/index";
import Home from "./routes";
import Owned from "./routes/owned/index";
import WatchList from "./routes/watchList/index";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

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
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <VStack spacing="24px">
          {/* <Box width="100%" backgroundColor="gray.100" pb="4"> */}
          {/* <VStack spacing="24px"> */}
          <Header />
          {/* <Navigation /> */}
          {/* </VStack> */}
          {/* </Box> */}
          {/* <Container maxW="container.xl">
            <Switch>
              <Route path="/collections">
                <Collections />
              </Route>
              <Route path="/owned">
                <Owned />
              </Route>
              <Route path="/watchList">
                <WatchList />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Container> */}
        </VStack>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
