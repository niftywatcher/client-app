import React from "react";
import { Flex, Box, Button, HStack, Text, Input } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex justify="space-between" w="100%" mt="20px">
      <Box>
        <HStack spacing={4}>
          <Box>
            <Text fontSize="xl">NiftyWatcher</Text>
          </Box>
          <Box>
            <Input placeholder="Search for collection" maxW="800px" w="100%" />
          </Box>
        </HStack>
      </Box>
      <Box>
        <Button>Get Premium</Button>
      </Box>
    </Flex>
  );
};

export default Header;
