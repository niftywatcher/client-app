import React, { useState } from "react";
import CollectionList from "../../../components/CollectionList";
import collectionsData from "../../../collections.json";
import WatchList from "../../../Shared/Interfaces/WatchList";

const Trending = () => {
  const filteredCollections = collectionsData.slice(0, 10);
  const [watchLists, setWatchLists] = useState<{ [id: number]: WatchList }>({
    0: {
      id: 0,
      name: "Trending Collections",
      collections: collectionsData.map((col) => col.id),
    },
  });

  return (
    <CollectionList
      collections={filteredCollections}
      watchLists={watchLists}
      setWatchLists={setWatchLists}
    />
  );
};

export default Trending;
