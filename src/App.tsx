import React, { useState } from "react";
import { chakra, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SplitView from "./components/SplitView";
import theme from "./theme";
import CollectionList from "./components/CollectionList/index";
import dimensions from "./Shared/utils/dimensions";
import collections from "./collections.json";

function App() {
  const collectionData = collections.slice(0, 25);

  const [watchLists, setWatchLists] = useState([
    {
      id: 0,
      name: "Trending Collections",
      collections: collectionData.map((col) => col.id),
    },
  ]);

  return (
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
                watchLists={watchLists}
                setWatchLists={setWatchLists}
              />
            }
            right={<CollectionList collections={collectionData} />}
            align="flex-start"
          />
        </chakra.main>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
