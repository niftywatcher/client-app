import React, { memo } from "react";
import { VStack } from "@chakra-ui/react";
import Card from "./Card";
import Collection from "../../Shared/Interfaces/collection";
import WatchList from "../../Shared/Interfaces/WatchList";
import { isEqual } from "lodash";

type CollectionListProps = {
  collections: Collection[];
  setWatchLists: React.Dispatch<
    React.SetStateAction<{ [id: number]: WatchList }>
  >;
  watchLists: { [id: number]: WatchList };
};

const CollectionList = ({
  collections,
  setWatchLists,
  watchLists,
}: CollectionListProps) => {
  return (
    <VStack align="flex-start" spacing="8" paddingBottom="50px">
      {collections.map((collection: Collection) => (
        <Card
          key={collection.id}
          address={collection.address}
          collectionId={collection.id}
          name={collection.name}
          imageUrl={collection.imageUrl}
          data={collection.floorData}
          setWatchLists={setWatchLists}
          watchLists={watchLists}
          deltaFloor={collection.deltaStats.floor}
        />
      ))}
    </VStack>
  );
};

export default memo(CollectionList, isEqual);
