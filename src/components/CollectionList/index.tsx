import React from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import collections from "./collections.json";

interface CardProps {
  name: string;
  imageUrl: string;
}

const Card = ({ name, imageUrl }: CardProps) => {
  const borderColor = useColorModeValue("gray.300", "transparent");
  const cardBgColor = useColorModeValue("white", "gray.700");

  return (
    <Box
      maxW="625px"
      w="100%"
      h="271px"
      borderRadius="16px"
      border="1px solid"
      borderColor={borderColor}
      backgroundColor={cardBgColor}
    >
      <HStack w="100%" padding="4">
        <Image
          borderRadius="50%"
          h="64px"
          w="64px"
          src={imageUrl}
          alt="collection logo"
        />
        <Flex justify="space-between" w="100%">
          <VStack>
            <Text fontSize="x-large" textAlign="left" fontWeight="bold">
              {name}
            </Text>
            <Text fontSize="medium">Floor E 0.02 + 2%</Text>
          </VStack>
          <Box borderRadius="50%" borderColor="gray.100">
            +
          </Box>
        </Flex>
      </HStack>
    </Box>
  );
};

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