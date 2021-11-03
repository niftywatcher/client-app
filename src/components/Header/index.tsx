import React from "react";
import { Flex, Box, Button, HStack, Text, Input } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <Flex justify="space-between" w="100%" mt="20px">
      <Box>
        <HStack spacing={4}>
          <Box>
            <Text
              fontSize="xl"
              onClick={() => history.push("/")}
              cursor="pointer"
            >
              NiftyWatcher
            </Text>
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
