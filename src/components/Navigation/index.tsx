import React, { useState, memo } from "react";
import { VStack, chakra } from "@chakra-ui/react";
import { camelCase, cloneDeep, isEqual } from "lodash";
import Link from "./Link";
import { useWeb3React } from "@web3-react/core";
import NewWatchListInput from "./NewWatchListInput";
import { useAppState } from "../../app-context";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const [watchListName, setWatchListName] = useState("");
  const { active } = useWeb3React();
  const { state, setState } = useAppState();
  const { watchLists } = state.user;
  const [activeItem, setActiveItem] = useState("0");

  if (!watchLists) {
    return <div>loading</div>;
  }

  const watchListsSorted = Object.entries(watchLists)
    .map(([id, wl]) => ({ ...wl, id: "" + id }))
    .sort((a, b) => a.order - b.order);

  const handleSetWatchList = () => {
    if (watchListName !== "") {
      setState((prevState) => {
        const newState = cloneDeep(prevState);

        if (newState.user && newState.user.watchLists) {
          const id = Object.keys(newState.user.watchLists).length++;

          newState.user.watchLists[id] = {
            id,
            order: id,
            slug: camelCase(watchListName),
            name: watchListName,
          };

          return newState;
        }

        return newState;
      });

      setWatchListName("");
    }
  };

  console.log(watchListsSorted);

  return (
    <chakra.nav h="100vh" w="100%" backgroundColor="black" paddingTop="50px">
      <VStack
        spacing="12px"
        align="flex-start"
        h="100vh"
        w="100%"
        paddingLeft="92px"
      >
        {watchListsSorted.map((item) => {
          return (
            <Link
              name={item.name}
              active={+item.id === +activeItem}
              key={item.id}
              onClick={() => {
                setActiveItem(item.id);

                navigate(`/watchLists/${item.slug}`, { replace: true });
              }}
            />
          );
        })}
        <NewWatchListInput
          value={watchListName}
          setValue={setWatchListName}
          disabled={!active}
          handleSetWatchList={handleSetWatchList}
        />
      </VStack>
    </chakra.nav>
  );
};

export default memo(Navigation, isEqual);
