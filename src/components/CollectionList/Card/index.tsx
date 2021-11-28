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
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import colors from "../../../Shared/utils/colors";
import { cloneDeep, isEqual } from "lodash";
import WatchList from "../../../Shared/Interfaces/WatchList";
import { AddIcon } from "@chakra-ui/icons";

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
  collectionId: string;
  name: string;
  imageUrl: string;
  data: number[];
  setWatchLists: React.Dispatch<
    React.SetStateAction<{ [id: number]: WatchList }>
  >;
  watchLists: { [id: number]: WatchList };
}

const Card = ({
  collectionId,
  name,
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
          <VStack>
            <Text
              fontSize="x-large"
              textAlign="left"
              fontWeight="bold"
              color="black"
            >
              {name}
            </Text>
            <Text color="black" fontSize="medium">
              Floor E 0.02 + 2%
            </Text>
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
