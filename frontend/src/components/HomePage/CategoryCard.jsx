import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export const CategoryCard = ({ data }) => {
  return (
    <Box
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      borderRadius={"10px"}
      p={3}
      bg={"white"}
      _hover={{ border: "2px solid #6504b5" }}
    >
      <Image src={data.image} w={"60%"} m={"auto"} alt={data.title} />
      <Text
        textAlign={"center"}
        fontSize={"18px"}
        p={2}
        fontWeight={"semibold"}
      >
        {data.title}
      </Text>
    </Box>
  );
};
