import React from "react";
import { Flex, Text, VStack } from "@chakra-ui/react";

const Home = () => {
  const now = new Date();
  const fiveMinutesAgo = new Date(
    now.getTime() - 1000 * 60 * 5
  ).toLocaleTimeString();

  return (
    <React.Fragment>
      <VStack spacing="16px" width="100%">
        <VStack spacing="2px" width="100%">
          <Text
            fontSize="large"
            textAlign="left"
            fontWeight="bold"
            width="100%"
          >
            Trending Collections
          </Text>
          <Flex justify="space-between" width="100%" align="center">
            <Text fontSize="sm">Period: 5 mins</Text>
            <Text fontSize="sm">Last updated at {fiveMinutesAgo}</Text>
          </Flex>
        </VStack>
      </VStack>
    </React.Fragment>
  );
};

export default Home;
