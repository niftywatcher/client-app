import React from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface CardProps {
  name: string;
  imageUrl: string;
}

const Card = ({ name, imageUrl }: CardProps) => {
  const borderColor = useColorModeValue("gray.300", "transparent");
  const cardBgColor = useColorModeValue("white", "gray.700");

  console.log({ Highcharts: Highcharts.getOptions().colors });

  // const stopColor =
  //   Highcharts && Highcharts.getOptions() && Highcharts.getOptions().colors;

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
            [0.5, "rgba(130, 250, 193, 0.50)"], // middle
            [1, "#ffffff00"], // end
          ],
        },
        data: [0, 2, 8, 5, 3, 6],
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
      border="1px solid"
      borderColor={borderColor}
      backgroundColor={cardBgColor}
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
            <Text fontSize="x-large" textAlign="left" fontWeight="bold">
              {name}
            </Text>
            <Text fontSize="medium">Floor E 0.02 + 2%</Text>
          </VStack>
          <Box borderRadius="50%" borderColor="gray.100">
            +
          </Box>
        </Flex>
      </HStack>
      <Box w="100%" position="absolute" top="50px">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Box>
    </Box>
  );
};

export default Card;
