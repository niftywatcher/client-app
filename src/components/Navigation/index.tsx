import React, { useState } from "react";
import { VStack, Text, chakra, HStack, Input } from "@chakra-ui/react";
import { cloneDeep } from "lodash";
import { AddIcon } from "@chakra-ui/icons";
import WatchList from "../../Shared/Interfaces/WatchList";

interface LinkProps {
  name: String;
  active: Boolean;
  onClick: () => void;
}

const Link = ({ name, active, onClick }: LinkProps) => {
  return (
    <Text
      onClick={onClick}
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

type NavigationProps = {
  activeWatchList: number;
  watchLists: WatchList[];
  setActiveWatchList: React.Dispatch<React.SetStateAction<any>>;
  setWatchLists: React.Dispatch<React.SetStateAction<any[]>>;
};

const Navigation = ({
  activeWatchList,
  setActiveWatchList,
  watchLists,
  setWatchLists,
}: NavigationProps) => {
  const [watchListName, setWatchListName] = useState("");

  const handleSetWatchList = () => {
    if (watchListName !== "") {
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
    }
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
          return (
            <Link
              name={item.name}
              active={item.id === activeWatchList}
              key={item.id}
              onClick={() => setActiveWatchList(item.id)}
            />
          );
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
