import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import MetamaskProvider from "./components/MetaMaskProvider/index";
import { AppProvider } from "./app-context";
import { CookiesProvider } from "react-cookie";

/**
 * How do we want to manage state for list of collections
 
 * ------Context------
 * global state {
 *  user {
 *    watchLists = { id: { trending, id, slug }, { blueChips, id, slug } }
 *  }
 * }
 
 * -----Trending.tsx------
 * go and grab the trending lists from the global state id

 * -----:watchList.tsx------
 * go and grab the :watchList id from the backend
 
 * TODO
 * 1. add collection ids to user.watchLists[id] = collection[collectionIds]
 * 2. on each page render the filtered lists
 * 3. create collection page with specific data (play around with charts)
 * 4. display the main page card charts nicely

 */

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function getLibrary(provider: any, connector: any) {
  return new ethers.providers.Web3Provider(provider); // this will vary according to whether you use e.g. ethers or web3.js
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CookiesProvider>
            <MetamaskProvider>
              <AppProvider>
                <App />
              </AppProvider>
            </MetamaskProvider>
          </CookiesProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
