import React, { useState } from "react";
import { chakra, Container } from "@chakra-ui/react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import SplitView from "../components/SplitView";
import dimensions from "../Shared/utils/dimensions";
import collections from "../collections.json";
import Collection from "../Shared/Interfaces/collection";
import WatchList from "../Shared/Interfaces/WatchList";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const collectionData: Collection[] = collections.slice(0, 10);

  const [watchLists, setWatchLists] = useState<{ [id: number]: WatchList }>({
    0: {
      id: 0,
      name: "Trending Collections",
      collections: collectionData.map((col) => col.id),
    },
  });

  const [activeWatchList, setActiveWatchList] = useState(watchLists[0].id);

  // const currentWatchList = watchLists[activeWatchList];

  // const filteredCollections = collectionData.filter(
  //   (col) =>
  //     currentWatchList &&
  //     currentWatchList.collections.find((wlId) => wlId === col.id)
  // );

  return (
    <>
      <Header />
      <chakra.main
        height={`calc(100vh - ${dimensions.headerHeight}px)`}
        overflow="hidden"
      >
        <SplitView
          left={
            <>
              <Navigation
                activeWatchList={activeWatchList}
                setActiveWatchList={setActiveWatchList}
                watchLists={watchLists}
                setWatchLists={setWatchLists}
              />
            </>
          }
          right={
            <chakra.section
              h="100%"
              w="100%"
              paddingTop="50px"
              overflow="scroll"
            >
              <Container maxW="container.xl" padding="0 50px" h="100%">
                <Outlet />
              </Container>
            </chakra.section>
          }
          align="flex-start"
        />
      </chakra.main>
    </>
  );
};

export default Layout;
