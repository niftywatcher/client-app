import React from "react";
import { chakra, Container, VStack } from "@chakra-ui/react";
import collections from "./collections.json";
import Card from "./Card";

interface Collection {
  id: string;
  name: string;
  imageUrl: string;
}

const CollectionList = () => {
  return (
    <chakra.main h="100vh" w="100%" paddingTop="50px">
      <Container
        maxW="container.xl"
        maxH="100vh"
        overflow="scroll"
        padding="0 50px"
      >
        <VStack align="flex-start" spacing="8">
          {collections.map((collection: Collection) => (
            <Card
              key={collection.id}
              name={collection.name}
              imageUrl={collection.imageUrl}
            />
          ))}
        </VStack>
      </Container>
    </chakra.main>
  );
};

export default CollectionList;
