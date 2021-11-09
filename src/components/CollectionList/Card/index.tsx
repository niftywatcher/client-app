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

  const options = {
    chart: {
      type: "spline",
      height: 150,
      backgroundColor: "transparent",
    },
    title: null,
    series: [
      {
        showInLegend: false,
        data: [0, 2, 1, 4, 3, 6],
      },
    ],
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
    credits: {
      enabled: false,
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
    >
      <HStack w="100%" padding="4">
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
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
};

export default Card;
