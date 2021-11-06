import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface SplitViewProps {
  left: React.ReactNode;
  right: React.ReactNode;
  align?: string;
}

const SplitView = ({ left, right, align = "center" }: SplitViewProps) => {
  return (
    <Flex align={align}>
      <Box w="322px">{left}</Box>
      <Box w="100%">{right}</Box>
    </Flex>
  );
};

export default SplitView;
