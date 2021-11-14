import React from "react";
import { chakra, Container, VStack } from "@chakra-ui/react";
import Card from "./Card";
import Collection from "../../Shared/Interfaces/collection";

type CollectionListProps = {
  collections: Collection[];
};

const CollectionList = ({ collections }: CollectionListProps) => {
  return (
    <chakra.section h="100%" w="100%" paddingTop="50px" overflow="scroll">
      <Container maxW="container.xl" padding="0 50px" h="100%">
        <VStack align="flex-start" spacing="8" paddingBottom="50px">
          {collections.map((collection: Collection) => (
            <Card
              key={collection.id}
              name={collection.name}
              imageUrl={collection.imageUrl}
              data={collection.floorData}
            />
          ))}
        </VStack>
      </Container>
    </chakra.section>
  );
};

export default CollectionList;
