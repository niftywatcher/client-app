import React from "react";
import { chakra, Container, VStack } from "@chakra-ui/react";
import collections from "./collections.json";
import Card from "./Card";

interface Collection {
  id: string;
  floor: number;
  address: string;
  description: string | null;
  discordUrl: string | null;
  externalUrl: string | null;
  imageUrl: string;
  instagramUsername: string | null;
  name: string;
  symbol: string | null;
  twitterUsername: string | null;
  deltaStats: {
    floor: number;
  };
  floorData: number[];
}

const CollectionList = () => {
  return (
    <chakra.section h="100%" w="100%" paddingTop="50px" overflow="scroll">
      <Container maxW="container.xl" padding="0 50px" h="100%">
        <VStack align="flex-start" spacing="8" paddingBottom="50px">
          {collections.map((collection: Collection) => (
            <Card
              key={collection.id}
              name={collection.name}
              imageUrl={collection.imageUrl}
            />
          ))}
        </VStack>
      </Container>
    </chakra.section>
  );
};

export default CollectionList;
