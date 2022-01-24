import React, { useState, memo } from "react";
import { VStack, chakra, Stack, Skeleton } from "@chakra-ui/react";
import { camelCase, cloneDeep, isEqual } from "lodash";
import Link from "./Link";
import { useWeb3React } from "@web3-react/core";
import NewWatchListInput from "./NewWatchListInput";
import { useAppState } from "../../app-context";
import { useNavigate } from "react-router-dom";
import { useCreateWatchListMutation } from "../../generated";
import graphqlRequestClient from "../../lib/graphqlRequestClient";

const Navigation = () => {
  const navigate = useNavigate();
  const [watchListName, setWatchListName] = useState("");
  const { active } = useWeb3React();
  const { state, setState } = useAppState();
  const { loading } = state;
  const { watchLists } = state.user;
  const [activeItem, setActiveItem] = useState("0123");
  const { mutateAsync, isLoading } =
    useCreateWatchListMutation(graphqlRequestClient);

  if (!loading && !watchLists) {
    return <div>No Watch Lists</div>;
  }

  const watchListsSorted = Object.entries(watchLists || {})
    .map(([id, wl]) => ({ ...wl, id: "" + id }))
    .sort((a, b) => a.order - b.order);

  const handleSetWatchList = async () => {
    if (watchListName !== "") {
      const response = await mutateAsync({
        name: watchListName,
        slug: camelCase(watchListName),
      });

      const data = response.CreateWatchList;

      setState((prevState) => {
        const newState = cloneDeep(prevState);

        if (newState.user && newState.user.watchLists) {
          newState.user.watchLists[data.id] = { ...data };

          return newState;
        }

        return newState;
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
        {loading && (
          <Stack width="90%">
            <Skeleton height="20px" width="100%" color="white" />
            <Skeleton height="20px" width="100%" color="white" />
            <Skeleton height="20px" width="100%" color="white" />
          </Stack>
        )}
        {watchListsSorted.map((item) => {
          return (
            <Link
              name={item.name}
              active={"" + item.id === "" + activeItem}
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
          loading={isLoading}
        />
      </VStack>
    </chakra.nav>
  );
};

export default memo(Navigation, isEqual);
