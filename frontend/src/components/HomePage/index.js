import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Banner } from "./Banner";
import { CardBox } from "./CardBox";
import { Blogs } from "./Blogs";

export const HomePage = () => {
  return (
    <Box>
      <Banner />
      <CardBox />
      <Blogs />
    </Box>
  );
};
