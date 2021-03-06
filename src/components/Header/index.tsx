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
  useColorModeValue,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import SplitView from "../SplitView";
import colors from "../../Shared/utils/colors";
import dimensions from "../../Shared/utils/dimensions";
import ConnectButton from "./ConnectButton";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue(
    colors.backgroundLight,
    colors.backgroundDark
  );

  return (
    <chakra.header
      h={`${dimensions.headerHeight}px`}
      w="100%"
      position="sticky"
      top="0"
      zIndex="2"
      backgroundColor={backgroundColor}
    >
      <SplitView
        align="center"
        left={
          <Center
            h="100%"
            w="100%"
            backgroundColor="black"
            borderBottom={colors.headerBorderColor}
          >
            <Text
              textAlign="center"
              backgroundColor="black"
              color="white"
              fontSize="xl"
              // onClick={() => history.push("/")}
              cursor="pointer"
              fontWeight="extrabold"
            >
              nifty watcher
            </Text>
          </Center>
        }
        right={
          <Center h="100%" w="100%" borderBottom={colors.headerBorderColor}>
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
                    color="black"
                    _placeholder={{ color: "gray.400" }}
                    backgroundColor={colors.componentBackgroundLight}
                  />
                </InputGroup>
                <HStack>
                  <Button onClick={toggleColorMode}>
                    Toggle {colorMode === "light" ? "Dark" : "Light"}
                  </Button>
                  <ConnectButton />
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
