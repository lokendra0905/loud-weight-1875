import React from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const Blogs = () => {
  return (
    <Box width={"80%"} m={'auto'} my={20}>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 2, base: 1 }} spacing="50">
        <Box
          maxW={"100%"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image
            h={"300px"}
            w={"100%"}
            src={
              "https://www.petfinder.com/sites/default/files/styles/card/public/images/content/47.jpeg?itok=HNT_yv1F"
            }
            objectFit={"cover"}
          />
          <Flex justify={"center"} mt={-12}>
            <Avatar
              marginTop={5}
              size={"xl"}
              src={
                "https://www.petfinder.com/sites/default/files/styles/card/public/images/content/47.jpeg?itok=HNT_yv1F"
              }
              alt={"Author"}
              css={{
                border: "2px solid white",
              }}
            />
          </Flex>
          <br />
          <Text fontSize="lg" textAlign={"center"}>
            Dog Adoption Articles
          </Text>
          {/* <br /> */}
          <Text fontSize="sm" textAlign={"center"}>
            Learn more about caring for your new dog.
          </Text>
          <br />
          <Button
            fontWeight={"bold"}
            w={"100%"}
            variant="ghost"
            _hover={{ bgColor: "#6A00FF" }}
          >
            READ MORE
          </Button>
        </Box>
        <Box
          //   border={"1px solid teal"}
          maxW={"100%"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image
            h={"300px"}
            w={"100%"}
            src={
              "https://www.petfinder.com/sites/default/files/styles/card/public/images/content/PF2015_267_Kittens_Shelter-630.jpg?itok=JGTdJJaD"
            }
            objectFit={"cover"}
          />
          <Flex justify={"center"} mt={-12}>
            <Avatar
              marginTop={5}
              size={"xl"}
              src={
                "https://www.petfinder.com/sites/default/files/styles/card/public/images/content/PF2015_267_Kittens_Shelter-630.jpg?itok=JGTdJJaD"
              }
              alt={"Author"}
              css={{
                border: "2px solid white",
              }}
            />
          </Flex>
          <br />
          <Text fontSize="lg" textAlign={"center"}>
            Cat Adoption Articles
          </Text>
          {/* <br /> */}
          <Text fontSize="sm" textAlign={"center"}>
            Helpful insights on what to expect.
          </Text>
          <br />
          <Button
            fontWeight={"bold"}
            w={"100%"}
            _hover={{ bgColor: "#6A00FF" }}
            variant="ghost"
          >
            READ MORE
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
