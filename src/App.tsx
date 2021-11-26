import React, { useState } from "react";
import { chakra } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SplitView from "./components/SplitView";
import CollectionList from "./components/CollectionList/index";
import dimensions from "./Shared/utils/dimensions";
import collections from "./collections.json";
import Collection from "./Shared/Interfaces/collection";
import WatchList from "./Shared/Interfaces/WatchList";

function App() {
  const collectionData: Collection[] = collections.slice(0, 10);

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
    <BrowserRouter>
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
            <>
              <CollectionList
                collections={filteredCollections}
                watchLists={watchLists}
                setWatchLists={setWatchLists}
              />
            </>
          }
          align="flex-start"
        />
      </chakra.main>
    </BrowserRouter>
  );
}

export default App;
