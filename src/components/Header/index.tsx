import React from "react";
import { Flex, Box, Button, HStack, Text, Input } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <Flex justify="space-between" w="100%" mt="20px">
      <Box w="100%">
        <HStack spacing={4}>
          <Text
            fontSize="xl"
            onClick={() => history.push("/")}
            cursor="pointer"
          >
            NiftyWatcher
          </Text>
          <Input placeholder="Search for collection" maxW="400px" w="100%" />
        </HStack>
      </Box>
      <Box>
        <Button>Get Premium</Button>
      </Box>
    </Flex>
  );
};

export default Header;
