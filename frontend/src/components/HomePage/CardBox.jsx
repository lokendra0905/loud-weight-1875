import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Card } from "../../Commons/Card";

export const CardBox = () => {
  const data = [
    {
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59422747/1/?bust=1683800930&width=316",
      name: "Begerra",
    },
    {
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48105713/1/?bust=1591006850&width=316",
      name: "Bryon",
    },
    {
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55064037/1/?bust=1683800951&width=316",
      name: "Hula",
    },
    {
      image:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60879545/1/?bust=1683800913&width=316",
      name: "Solovi",
    },
  ];
  return (
    <Box m={"auto"} textAlign={"center"} mt={200} w={"80%"} mb={6}>
      <Heading color={"#6504b5"}>Pets Available for Adoption Nearby</Heading>
      <Grid
        gridTemplateColumns={{
          lg: "repeat(5,1fr)",
          md: "repeat(2,1fr)",
          sm: "repeat(1,1fr)",
        }}
        mt={5}
        gap={5}
      >
        {data.map((item) => {
          return <Card data={item} />;
        })}
        <Box
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          borderRadius={"10px"}
          bg={"#6504b5"}
          pb={5}
          color={"white"}
        >
          <Image
            src="assets/dog_white.svg"
            color={"white"}
            w={"70%"}
            mx={"auto"}
            mt={7}
          />
          <Text textAlign={"center"} mt={5} color={"white"}>
            84 more pets available on Petfinder
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};
