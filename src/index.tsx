import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import MetamaskProvider from "./components/MetaMaskProvider/index";

/**
 * How do we want to manage state for list of collections
 *
 * global state {
 *  watchLists [{trending}, {blueChips}, {allThingApes}]
 * }
 *
 * <Navigator /> component will handle adding a new
 */

function getLibrary(provider: any, connector: any) {
  return new ethers.providers.Web3Provider(provider); // this will vary according to whether you use e.g. ethers or web3.js
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <MetamaskProvider>
          <App />
        </MetamaskProvider>
      </ChakraProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
