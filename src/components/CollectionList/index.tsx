import React from "react";
import { VStack } from "@chakra-ui/react";
import collections from "./collections.json";
import Card from "./Card";

interface Collection {
  id: string;
  name: string;
  imageUrl: string;
}

const CollectionList = () => {
  return (
    <VStack align="flex-start" spacing="8">
      {collections.map((collection: Collection) => (
        <Card
          key={collection.id}
          name={collection.name}
          imageUrl={collection.imageUrl}
        />
      ))}
    </VStack>
  );
};

export default CollectionList;
