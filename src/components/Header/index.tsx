import React from "react";
import {
  chakra,
  Flex,
  Button,
  HStack,
  Text,
  Input,
  Container,
  InputGroup,
  InputLeftElement,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
import SplitView from "../SplitView";

const Header = () => {
  const history = useHistory();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <chakra.header h="144px" w="100%">
      <SplitView
        align="center"
        left={
          <Center
            h="100%"
            w="100%"
            backgroundColor="black"
            borderBottom="1px solid"
            borderBottomColor="gray.300"
          >
            <Text
              textAlign="center"
              backgroundColor="black"
              color="white"
              fontSize="xl"
              onClick={() => history.push("/")}
              cursor="pointer"
              fontWeight="extrabold"
            >
              nifty watcher
            </Text>
          </Center>
        }
        right={
          <Center
            h="100%"
            w="100%"
            borderBottom="1px solid"
            borderBottomColor="gray.300"
          >
            <Container maxW="container.xl" padding="0 50px">
              <Flex justify="space-between">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Search2Icon color="gray.400" />}
                  />
                  <Input
                    placeholder="Search for collection"
                    maxW="400px"
                    w="100%"
                    borderColor="gray.400"
                  />
                </InputGroup>
                <HStack>
                  <Button onClick={toggleColorMode}>
                    Toggle {colorMode === "light" ? "Dark" : "Light"}
                  </Button>
                  <Button colorScheme="green">Connect Wallet</Button>
                </HStack>
              </Flex>
            </Container>
          </Center>
        }
      />
    </chakra.header>
  );
};

export default Header;
