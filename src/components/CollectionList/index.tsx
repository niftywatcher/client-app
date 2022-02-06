import React, { memo } from "react";
import { VStack } from "@chakra-ui/react";
import Card from "./Card";
import WatchList from "../../Shared/Interfaces/WatchList";
import { isEqual } from "lodash";
import { Collection } from "../../generated";

type CollectionListProps<T> = {
  collections: T[];
  setWatchLists: React.Dispatch<
    React.SetStateAction<{ [id: number]: WatchList }>
  >;
  watchLists: { [id: number]: WatchList };
};

const CollectionList = ({
  collections,
  setWatchLists,
  watchLists,
}: CollectionListProps<Collection>) => {
  return (
    <VStack align="flex-start" spacing="8" paddingBottom="50px">
      {collections.map((collection, i) => (
        <Card
          // TODO: remove 'i' index as
          key={collection.id + "" + i}
          address={collection.address}
          collectionId={collection.id}
          name={collection.name}
          imageUrl={collection.imageUrl}
          data={collection.floorData}
          setWatchLists={setWatchLists}
          watchLists={watchLists}
          deltaFloor={collection.changeInFloor5Minutes}
        />
      ))}
    </VStack>
  );
};

export default memo(CollectionList, isEqual);
