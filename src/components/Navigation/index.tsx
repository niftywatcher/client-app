import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Container, VStack, Text } from "@chakra-ui/react";

interface LinkProps {
  name: String;
  active: Boolean;
}

const Link = ({ name, active }: LinkProps) => {
  return (
    <Text
      color={active ? "green.300" : "gray.900"}
      fontWeight={active ? "bold" : "semibold"}
      _hover={{
        color: "gray.300",
      }}
    >
      {name}
    </Text>
  );
};

const Navigation = () => {
  const { pathname } = useLocation();

  const path = pathname.slice(1);

  return (
    <Container maxW="container.xl">
      {/* <Flex justify="flex-start" maxW="100%" w="100%"> */}
      <VStack spacing="12px" align="flex-start">
        <RouterLink to="/collections">
          <Link name="Collections" active={path.includes("collections")} />
        </RouterLink>
        <RouterLink to="/owned">
          <Link name="Owned" active={path.includes("owned")} />
        </RouterLink>
        <RouterLink to="/watchList">
          <Link name="Watch List" active={path.includes("watchList")} />
        </RouterLink>
      </VStack>
      {/* </Flex> */}
    </Container>
  );
};

export default Navigation;
