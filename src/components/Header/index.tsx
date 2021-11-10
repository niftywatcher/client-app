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
  Box,
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
          <Box h="100%" w="100%" backgroundColor="black">
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
          </Box>
        }
        right={
          <Container maxW="container.xl">
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
        }
      />
    </chakra.header>
  );
};

// const Header = () => {
//   const history = useHistory();

//   return (
//     <Container maxW="container.xl">
//       <Flex justify="space-between" w="100%" mt="20px">
//         <Box w="100%">
//           <HStack spacing={4}>
//             <Text
//               fontSize="xl"
//               onClick={() => history.push("/")}
//               cursor="pointer"
//               fontWeight="extrabold"
//             >
//               NiftyWatcher
//             </Text>
// <InputGroup>
//   <InputLeftElement
//     pointerEvents="none"
//     children={<Search2Icon color="gray.400" />}
//   />
//   <Input
//     placeholder="Search for collection"
//     maxW="400px"
//     w="100%"
//     borderColor="gray.400"
//   />
// </InputGroup>
//           </HStack>
//         </Box>
//         <Box>
//           <Button colorScheme="green">Get Premium</Button>
//         </Box>
//       </Flex>
//     </Container>
//   );
// };

export default Header;
