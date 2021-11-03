import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Flex, HStack, Text } from "@chakra-ui/react";

const Navigation = () => {
  const { pathname } = useLocation();

  const path = pathname.slice(1);

  return (
    <Flex justify="flex-start" maxW="100%" w="100%">
      <HStack spacing="12px">
        <RouterLink to="/collections">
          <Text color={path.includes("collections") ? "green.300" : "grey.900"}>
            Collections
          </Text>
        </RouterLink>
        <RouterLink to="/owned">
          <Text color={path.includes("owned") ? "green.300" : "grey.900"}>
            Owned
          </Text>
        </RouterLink>
        <RouterLink to="/watchList">
          <Text color={path.includes("watchList") ? "green.300" : "grey.900"}>
            Watch List
          </Text>
        </RouterLink>
      </HStack>
    </Flex>
  );
};

export default Navigation;
