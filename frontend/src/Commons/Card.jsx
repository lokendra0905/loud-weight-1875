import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Card = ({ data }) => {
  return (
    <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"10px"}>
      <Box
        pb={5}
        bgImage={`url(${data.image})`}
        h={300}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        borderTopRightRadius={"10px"}
        borderTopLeftRadius={"10px"}
      ></Box>
      <Text
        textAlign={"center"}
        fontSize={"20px"}
        color={"#6504b5"}
        fontWeight={600}
        p={5}
      >
        {data.name}
      </Text>
    </Box>
  );
};
