import React, { memo } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import colors from "../../../Shared/utils/colors";
import { cloneDeep, isEqual } from "lodash";
import WatchList from "../../../Shared/Interfaces/WatchList";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

type AddWatchListButtonProps = {
  collectionId: string;
  watchLists: { [id: number]: WatchList };
  setWatchLists: React.Dispatch<
    React.SetStateAction<{ [id: number]: WatchList }>
  >;
};

const AddWatchListButton = ({
  collectionId,
  watchLists,
  setWatchLists,
}: AddWatchListButtonProps) => {
  const addToWatchList = (watchListId: number): void => {
    setWatchLists((prevState) => {
      const newState = cloneDeep(prevState);

      newState[watchListId].collections.push(collectionId);

      return newState;
    });
  };
  return (
    <React.Fragment>
      {Object.keys(watchLists).length ? (
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<AddIcon color="green.300" />}
            variant="outline"
          />
          <MenuList>
            {Object.values(watchLists).map((wl) => (
              <MenuItem
                key={wl.id}
                icon={<AddIcon />}
                onClick={() => addToWatchList(wl.id)}
              >
                {wl.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ) : null}
    </React.Fragment>
  );
};

interface CardProps {
  address: string;
  collectionId: string;
  name: string;
  deltaFloor: number;
  imageUrl: string;
  data: number[];
  setWatchLists: React.Dispatch<
    React.SetStateAction<{ [id: number]: WatchList }>
  >;
  watchLists: { [id: number]: WatchList };
}

const Card = ({
  address,
  collectionId,
  name,
  deltaFloor,
  imageUrl,
  data,
  setWatchLists,
  watchLists,
}: CardProps) => {
  const options = {
    chart: {
      backgroundColor: "transparent",
      height: 210,
      margin: [0, 0, 10, 0],
      type: "areaspline",
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
    },
    series: [
      {
        showInLegend: false,
        color: "#34C096",
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, "rgba(130, 250, 193, 0.8)"], // start
            [0.25, "rgba(130, 250, 193, 0.75)"], // middle
            [0.6, "rgba(130, 250, 193, 0.50)"], // middle
            [1, "#ffffff00"], // end
          ],
        },
        data,
      },
    ],
    title: null,
    xAxis: {
      title: null,
      labels: {
        enabled: false,
      },
      lineWidth: 0,
      minorGridLineWidth: 0,
      minorTickLength: 0,
      tickLength: 0,
    },
    yAxis: {
      title: null,
      labels: {
        enabled: false,
      },
      gridLineColor: "transparent",
    },
  };

  return (
    <Box
      maxW="625px"
      w="100%"
      h="271px"
      borderRadius="16px"
      backgroundColor={colors.componentBackgroundLight}
      position="relative"
    >
      <HStack w="100%" padding="4" paddingBottom="0">
        <Image
          borderRadius="50%"
          h="64px"
          w="64px"
          src={imageUrl}
          alt="collection logo"
        />
        <Flex justify="space-between" w="100%">
          <VStack alignItems="flex-start" spacing={0}>
            <Link replace to={`/collection/${address}`}>
              <Text
                fontSize="28px"
                textAlign="left"
                fontWeight="bold"
                color="black"
                _hover={{
                  cursor: "pointer",
                  color: "green.300",
                  textDecoration: "underline",
                }}
              >
                {name}
              </Text>
            </Link>
            <HStack mt="0">
              <Text color="black" fontSize="16px" fontWeight="normal">
                {`Floor 0.02 E`}
              </Text>
              <Text fontSize="16px" fontWeight="normal" color="green.400">
                {`${deltaFloor * 100}%`}
              </Text>
            </HStack>
          </VStack>
          <Box borderRadius="50%" borderColor="gray.100">
            <AddWatchListButton
              collectionId={collectionId}
              watchLists={Object.values(watchLists).filter((wl) => wl.id !== 0)}
              setWatchLists={setWatchLists}
            />
          </Box>
        </Flex>
      </HStack>
      <Box w="100%" position="absolute" top="50px">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Box>
    </Box>
  );
};

export default memo(Card, isEqual);
