import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import {
  Box,
  Image,
  FormControl,
  Input,
  Divider,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { CategoryCard } from "./CategoryCard";

export const Banner = () => {
  const CARD_Items = [
    {
      title: "Dog",
      image: "assets/dogs.svg",
      url: "/dogAdoptionPage",
    },
    {
      title: "Cats",
      image: "assets/cats.svg",
      url: "/dogAdoptionPage",
    },
    {
      title: "Other Animals",
      image: "assets/other_animals.svg",
      url: "/dogAdoptionPage",
    },
    {
      title: "Shelters",
      image: "assets/shelters.svg",
      url: "/shelters",
    },
  ];

  return (
    <Box>
      <Box w={"100%"} pos={"relative"}>
        <Box bgColor={"black"}>
          <Image
            w={"100%"}
            opacity={0.6}
            h={"70vh"}
            bgSize={"cover"}
            src="https://www.petfinder.com/sites/default/files/styles/hero_image_1140_410/public/images/content/1140%20hero%20image_0.jpg?itok=wryBzVcI"
          />
          <FormControl
            display={"flex"}
            left={{ base: "5%", md: "10%", lg: "20%" }}
            flexDirection={"row"}
            alignItems={"center"}
            position={"absolute"}
            top={{ md: "5%", base: "0", lg: "10%" }}
            w={{ lg: "60%", md: "80%", base: "90%" }}
            h={"60px"}
            bg={"white"}
            borderRadius={"10px"}
            my={5}
          >
            <Input
              type="text"
              h={"100%"}
              variant={"unstyled"}
              pl={5}
              placeholder="Search terria, kitten, etc"
              border={"none"}
            />
            <Divider orientation="vertical" height="50px" />
            <Input
              pl={5}
              type="text"
              variant={"unstyled"}
              h={"100%"}
              placeholder="Enter City, State or Zip"
            />
            <Box
              type="submit"
              w={"100px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"5px"}
              h={"40px"}
              border={"none"}
              bg={"#6504b5"}
              color={"white"}
              m={"10px"}
              fontSize={"40px%"}
              cursor={"pointer"}
            >
              <BiSearchAlt fontSize={"25px"} />
            </Box>
          </FormControl>
          <Box
            pos={"absolute"}
            color={"white"}
            textAlign={"center"}
            top={{ md: "35%", lg: "40%", base: "35%" }}
            left={{ base: "5%", md: "10%" }}
            right={{ base: "5%", md: "10%" }}
          >
            <Heading fontSize={{ base: "30px", md: "40px" }} color={"white"}>
              Find your new best friend
            </Heading>
            <Text mt={5} fontSize={"18px"}>
              Browse pets from our network of over 11,500 shelters and rescues.
            </Text>
          </Box>
        </Box>
        <SimpleGrid
          columns={{ base: 1, md: 4 }}
          gap={5}
          bottom={"-28"}
          left={"10%"}
          right={"10%"}
          position={{ base: "none", md: "absolute" }}
          w={{ lg: "70%", md: "80%", base: "90%" }}
          m={"auto"}
        >
          {CARD_Items.map((item) => (
            <CategoryCard key={item.title} data={item} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
