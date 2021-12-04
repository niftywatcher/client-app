import { Box, chakra, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import collections from "../../../collections.json";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import generateFloorData from "./floorDataGenerator";
import colors from "../../../Shared/utils/colors";
import generateVolumeData from "./volumeDataGenerator";

const CollectionDetail = () => {
  const { address } = useParams();

  const collection = collections.find((c) => c.address === address);

  const options = {
    chart: {
      backgroundColor: "transparent",
      height: 300,
      margin: [20, 70, 20, 70],
      // type: "line",
      zoomType: "xy",
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        type: "line",
        name: "Floor",
        showInLegend: false,
        color: "#34C096",
        data: generateFloorData(),
        zIndex: 2,
        // yAxis: 1,
      },
      {
        type: "column",
        name: "volume",
        showInLegend: false,
        color: "#63B3ED",
        data: generateVolumeData(),
        zIndex: 1,
        yAxis: 1,
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
    yAxis: [
      {
        title: { text: "Floor" },
        labels: {
          enabled: true,
        },
        gridLineColor: "transparent",
      },
      {
        title: { text: "Volume" },
        labels: {
          enabled: true,
        },
        gridLineColor: "transparent",
        opposite: true,
      },
    ],
  };

  console.log({ options });

  return (
    <chakra.section h="100%" w="100%">
      {collection ? (
        <Box>
          <VStack>
            <Text>{collection.address}</Text>
            <Text>{collection.name}</Text>
            <Box
              w="100%"
              h="100%"
              backgroundColor={colors.componentBackgroundLight}
            >
              <HighchartsReact highcharts={Highcharts} options={options} />
            </Box>
          </VStack>
        </Box>
      ) : (
        <VStack w="100%" h="100%">
          <Flex w="100%" h="100%" justify="center" alignItems="center">
            <Text>
              {`Collection ${address} not found, please try a different contract address.`}
            </Text>
          </Flex>
        </VStack>
      )}
    </chakra.section>
  );
};

export default CollectionDetail;
