import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface SplitViewProps {
  left: React.ReactNode;
  right: React.ReactNode;
  align?: string;
}

const SplitView = ({ left, right, align = "center" }: SplitViewProps) => {
  return (
    <Flex align={align} w="100%" h="100%">
      <Box w="322px" h="100%" flexShrink={0}>
        {left}
      </Box>
      <Box w="100%" h="100%" flexGrow={1}>
        {right}
      </Box>
    </Flex>
  );
};

export default SplitView;
