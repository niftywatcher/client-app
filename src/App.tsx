import React, { useState } from "react";
import { chakra, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SplitView from "./components/SplitView";
import theme from "./theme";
import CollectionList from "./components/CollectionList/index";
import dimensions from "./Shared/utils/dimensions";
import collections from "./collections.json";
import Collection from "./Shared/Interfaces/collection";
import WatchList from "./Shared/Interfaces/WatchList";
import Web3 from "web3";

function getLibrary(provider: any, connector: any) {
  return new Web3(provider); // this will vary according to whether you use e.g. ethers or web3.js
}

function App() {
  const collectionData: Collection[] = collections.slice(0, 25);

  const [watchLists, setWatchLists] = useState<{ [id: number]: WatchList }>({
    0: {
      id: 0,
      name: "Trending Collections",
      collections: collectionData.map((col) => col.id),
    },
  });

  const [activeWatchList, setActiveWatchList] = useState(watchLists[0].id);

  const currentWatchList = watchLists[activeWatchList];

  const filteredCollections = collectionData.filter(
    (col) =>
      currentWatchList &&
      currentWatchList.collections.find((wlId) => wlId === col.id)
  );

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Header />
          <chakra.main
            height={`calc(100vh - ${dimensions.headerHeight}px)`}
            overflow="hidden"
          >
            <SplitView
              left={
                <Navigation
                  activeWatchList={activeWatchList}
                  setActiveWatchList={setActiveWatchList}
                  watchLists={watchLists}
                  setWatchLists={setWatchLists}
                />
              }
              right={
                <CollectionList
                  collections={filteredCollections}
                  watchLists={watchLists}
                  setWatchLists={setWatchLists}
                />
              }
              align="flex-start"
            />
          </chakra.main>
        </ChakraProvider>
      </BrowserRouter>
    </Web3ReactProvider>
  );
}

export default App;
