import React from "react";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Collections from "./routes/collections/index";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SplitView from "./components/SplitView";
import theme from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <VStack spacing="24px">
          {/* <Box width="100%" backgroundColor="gray.100" pb="4"> */}
          {/* <VStack spacing="24px"> */}
          <Header />
          <SplitView
            left={<Navigation />}
            right={<Collections />}
            align="flex-start"
          />
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
