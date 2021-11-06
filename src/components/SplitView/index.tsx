import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface SplitViewProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const SplitView = ({ left, right }: SplitViewProps) => {
  return (
    <Flex align="center">
      <Box w="322px">{left}</Box>
      <Box w="100%">{right}</Box>
    </Flex>
  );
};

export default SplitView;
