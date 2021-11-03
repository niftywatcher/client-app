import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Collections from "./routes/collections/index";
import Home from "./routes";

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
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/collections">Collections</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/collections">
            <Collections />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
