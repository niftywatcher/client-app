import React from "react";
import {
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  VStack,
} from "@chakra-ui/react";
import collections from "./collections.json";

const Collections = () => {
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
        <Table variant="simple">
          <Thead backgroundColor="gray.100">
            <Tr>
              <Th>COLLECTION</Th>
              <Th>FLOOR (SALES)</Th>
              <Th>AVERAGE</Th>
              <Th>VOLUME</Th>
              <Th>SALE VOLUME</Th>
              <Th>7D VOLUME</Th>
            </Tr>
          </Thead>
          <Tbody backgroundColor="gray.50">
            {collections.map((col) => (
              <Tr key={col.id}>
                <Td>{col.name}</Td>
                <Td>{col.minPriceInEth}</Td>
                <Td>{col.averagePriceInEth}</Td>
                <Td>{col.saleVolume}</Td>
                <Td>{col.volumeInEth}</Td>
                <Td>{col.sevenDayVolumes.join(", ")}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </React.Fragment>
  );
};

export default Collections;
