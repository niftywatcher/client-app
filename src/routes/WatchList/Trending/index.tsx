import React, { useEffect, useState } from "react";
import CollectionList from "../../../components/CollectionList";
import collectionsData from "../../../collections.json";
import WatchList from "../../../Shared/Interfaces/WatchList";
import { useTrendingCollectionsQuery } from "../../../generated";
import graphqlRequestClient from "../../../lib/graphqlRequestClient";
import { isNil } from "lodash";
import { Center, Spinner } from "@chakra-ui/react";
import { useAppState } from "../../../app-context";

const Trending = () => {
  const { state: appState, setState: setAppState } = useAppState();

  console.log({ appState });

  const [watchLists, setWatchLists] = useState<{ [id: number]: WatchList }>({
    0: {
      id: 0,
      name: "Trending Collections",
      collections: collectionsData.map((col) => col.id),
    },
  });

  const { data, isError, isLoading } =
    useTrendingCollectionsQuery(graphqlRequestClient);

  if (isError) {
    console.log("is error", isError);
    return <div>Error</div>;
  }

  if (!data && !isLoading) {
    console.log(" no data ", data);
    return <div>No Data</div>;
  }

  const trending = data && data.trending ? data.trending : [];

  return (
    <>
      {isLoading && (
        <Center h="100px">
          <Spinner />
        </Center>
      )}
      {!isLoading && !isNil(data) && (
        <CollectionList
          collections={trending}
          watchLists={watchLists}
          setWatchLists={setWatchLists}
        />
      )}
    </>
  );
};

export default Trending;
