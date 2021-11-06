import React from "react";
import {
  Flex,
  Box,
  Button,
  HStack,
  Text,
  Input,
  Container,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
import SplitView from "../SplitView";

const Header = () => {
  const history = useHistory();

  return (
    <Container maxW="container.xl" m="4">
      <SplitView
        left={
          <Text
            fontSize="xl"
            onClick={() => history.push("/")}
            cursor="pointer"
            fontWeight="extrabold"
          >
            nifty watcher
          </Text>
        }
        right={
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
              <Button>Dark mode</Button>
              <Button colorScheme="green">Connect Wallet</Button>
            </HStack>
          </Flex>
        }
      />
    </Container>
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
