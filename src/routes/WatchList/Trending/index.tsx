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

  /**
   * problem: how do we fetch a list of trending watch lists?
   *
   * 1) fetch all watchLists first then make a fetch for each WL after that
   * 2) Fetch everything all at once
   *
   * option 1)
   *
   * 1. Check if we have the things we need in appState
   * 2. Look for the trending watch List and fetch for that list (for now we can return random data for it)
   * 3. If we want to add things to it, we can create a mutation, but rn we'll just modify the current list
   */

  return (
    <CollectionList
      collections={filteredCollections}
      watchLists={watchLists}
      setWatchLists={setWatchLists}
    />
  );
};

export default Trending;
