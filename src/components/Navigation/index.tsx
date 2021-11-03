import React from "react";
import { Link } from "react-router-dom";
import { Flex, HStack } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Flex justify="flex-start" maxW="100%" w="100%">
      <HStack spacing="6px">
        <Link to="/">Home</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/owned">Owned</Link>
        <Link to="/watchList">Watch List</Link>
      </HStack>
    </Flex>
  );
};

export default Navigation;
