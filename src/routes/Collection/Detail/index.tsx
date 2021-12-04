import { Box, chakra, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import collections from "../../../collections.json";

const CollectionDetail = () => {
  const { address } = useParams();

  const collection = collections.find((c) => c.address === address);

  return (
    <chakra.section h="100%" w="100%">
      {collection ? (
        <Box>
          <VStack>
            <Text>{collection.address}</Text>
            <Text>{collection.name}</Text>
          </VStack>
        </Box>
      ) : (
        <Box w="100%" h="100%">
          <Flex w="100%" h="100%" justify="center" alignItems="center">
            <Text>
              {`Collection ${address} not found, please try a different contract address.`}
            </Text>
          </Flex>
        </Box>
      )}
    </chakra.section>
  );
};

export default CollectionDetail;
