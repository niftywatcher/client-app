import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { VStack, Text, chakra } from "@chakra-ui/react";

interface LinkProps {
  name: String;
  active: Boolean;
}

const Link = ({ name, active }: LinkProps) => {
  return (
    <Text
      color={active ? "green.300" : "white"}
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
    <chakra.nav h="100vh" w="100%" backgroundColor="black" paddingTop="50px">
      <VStack
        spacing="12px"
        align="flex-start"
        h="100vh"
        w="100%"
        paddingLeft="92px"
      >
        <RouterLink to="/collections">
          <Link name="All Collections" active={path.includes("collections")} />
        </RouterLink>
        <RouterLink to="/blueChip">
          <Link name="Blue Chip" active={path.includes("blueChip")} />
        </RouterLink>
        <RouterLink to="/upComing">
          <Link name="Up Coming" active={path.includes("upComing")} />
        </RouterLink>
      </VStack>
    </chakra.nav>
  );
};

export default Navigation;
