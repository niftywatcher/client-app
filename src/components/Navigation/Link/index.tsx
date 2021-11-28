import { Text } from "@chakra-ui/react";
import { isEqual } from "lodash";
import React, { memo } from "react";

interface LinkProps {
  name: String;
  active: Boolean;
  onClick: () => void;
}

const Link = ({ name, active, onClick }: LinkProps) => {
  return (
    <Text
      onClick={onClick}
      color={active ? "green.300" : "white"}
      fontSize="md"
      fontWeight={active ? "medium" : "normal"}
      _hover={{
        color: "gray.300",
        cursor: "pointer",
      }}
    >
      {name}
    </Text>
  );
};

export default memo(Link, isEqual);
