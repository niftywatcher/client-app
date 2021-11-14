import React, { useState } from "react";
import { VStack, Text, chakra, HStack, Input } from "@chakra-ui/react";
import { cloneDeep } from "lodash";
import { AddIcon } from "@chakra-ui/icons";

interface LinkProps {
  name: String;
  active: Boolean;
}

const Link = ({ name, active }: LinkProps) => {
  return (
    <Text
      color={active ? "green.300" : "white"}
      fontWeight={active ? "bold" : "semibold"}
      _hover={{
        color: "gray.300",
        cursor: "pointer",
      }}
    >
      {name}
    </Text>
  );
};

type WatchList = {
  id: number;
  name: string;
  collections: string[];
};

type NavigationProps = {
  watchLists: WatchList[];
  setWatchLists: React.Dispatch<React.SetStateAction<any[]>>;
};

const Navigation = ({ watchLists, setWatchLists }: NavigationProps) => {
  const [watchListName, setWatchListName] = useState("");

  const handleSetWatchList = () => {
    setWatchLists((prevState) => {
      const newState = cloneDeep(prevState);

      return [
        ...newState,
        {
          id: newState.length++,
          name: watchListName,
          collections: [],
        },
      ];
    });

    setWatchListName("");
  };

  return (
    <chakra.nav h="100vh" w="100%" backgroundColor="black" paddingTop="50px">
      <VStack
        spacing="12px"
        align="flex-start"
        h="100vh"
        w="100%"
        paddingLeft="92px"
      >
        {watchLists.map((item) => {
          return <Link name={item.name} active={true} key={item.id} />;
        })}
        <HStack>
          <Input
            maxW="115px"
            color="white"
            variant="unstyled"
            placeholder="New Watchlist"
            value={watchListName}
            onChange={(e) => setWatchListName(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") handleSetWatchList();
            }}
          />
          <AddIcon
            cursor="pointer"
            color="green.300"
            onClick={handleSetWatchList}
          />
        </HStack>
      </VStack>
    </chakra.nav>
  );
};

export default Navigation;
