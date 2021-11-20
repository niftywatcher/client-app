import React, { useState, memo } from "react";
import { VStack, chakra, HStack, Input } from "@chakra-ui/react";
import { cloneDeep, isEqual } from "lodash";
import { AddIcon } from "@chakra-ui/icons";
import WatchList from "../../Shared/Interfaces/WatchList";
import Link from "./Link";
import { useWeb3React } from "@web3-react/core";

type NavigationProps = {
  activeWatchList: number;
  watchLists: { [id: number]: WatchList };
  setActiveWatchList: React.Dispatch<React.SetStateAction<any>>;
  setWatchLists: React.Dispatch<
    React.SetStateAction<{ [id: number]: WatchList }>
  >;
};

const Navigation = ({
  activeWatchList,
  setActiveWatchList,
  watchLists,
  setWatchLists,
}: NavigationProps) => {
  const [watchListName, setWatchListName] = useState("");
  const { active } = useWeb3React();

  const handleSetWatchList = () => {
    if (watchListName !== "") {
      setWatchLists((prevState) => {
        const newState = cloneDeep(prevState);
        const id = Object.keys(newState).length++;

        return {
          ...newState,
          [id]: {
            id,
            name: watchListName,
            collections: [],
          },
        };
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
        {Object.values(watchLists)
          .filter((wl) => {
            if (active) return true;

            if (wl.id === 0) return true;

            return false;
          })
          .map((item) => {
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
            isDisabled={!active}
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

export default memo(Navigation, isEqual);
