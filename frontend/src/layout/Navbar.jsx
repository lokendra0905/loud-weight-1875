import { Box, Image, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHeart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Dropdown } from "./Dropdownmenu";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  const [statue, Setstatus] = useState(false);
  const handleTogleSidebar = () => {
    Setstatus(!statue);
  };
  return (
    <>
      <Box w={"100%"} display={{ base: "none", lg: "block" }}>
        <Box
          h={"70px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            w={"50%"}
            h={"100%"}
            display={"flex"}
            justifyContent={"left"}
            alignItems={"center"}
            gap={"50px"}
          >
            <Box w={"250px"} ml={"40px"}>
              <Link to={"/"}>
                <Image
                  src={
                    "https://drive.google.com/uc?id=1RZumzqhGMEoL2aOB-RmBtT6wmO7G7VZf"
                  }
                  alt=""
                  w={"100%"}
                />
              </Link>
            </Box>
            <Box ml={10}>
              <Text fontWeight={"700"} fontSize={"20"} color={"#6504b5"}>
                All About Pets
              </Text>
            </Box>
          </Box>

          <Box
            width={"50%"}
            h={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"right"}
          >
            <Box
              mr={"10%"}
              h={"100%"}
              w={"50%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                fontSize={"1.9rem"}
                w={"29%"}
                h={"100%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                _hover={{ color: "#6504b5" }}
              >
                <AiTwotoneHeart />
              </Box>
              <Box
                borderLeft={"1px solid"}
                fontWeight={"bold"}
                fontSize={"1.1rem"}
                w={"29%"}
                h={"100%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                _hover={{ color: "green" }}
              >
                <Link to={"/register"}>Sign Up</Link>
              </Box>
              <Box
                fontWeight={"bold"}
                fontSize={"1.1rem"}
                w={"29%"}
                h={"100%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                _hover={{ color: "green" }}
              >
                <Link to={"/login"}>Log In</Link>
              </Box>
            </Box>
          </Box>
        </Box>

        <HStack
          boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
          bg={"#6504b5"}
          color={"white"}
          height={"50px"}
          justifyContent={"center"}
          gap={"10%"}
          fontSize={"sm"}
          fontWeight={"bold"}
          zIndex={100}
        >
          <Dropdown
            texts={[
              { text: "About Petfinder", link: "#" },
              { text: "Adopting Pets", link: "#" },
              { text: "Animal Shelters & Rescues", link: "#" },
              { text: "Petfinder Foundation", link: "#" },
            ]}
            title={"ADOPT OR GET INVOLVED"}
            he={"180px"}
            we={"250px"}
            navlink={"/"}
          />
          <Dropdown
            texts={[
              { text: "Dog Adoption", link: "#" },
              { text: "Dog Breeds", link: "#" },
              { text: "Feeding Your Dog", link: "#" },
              { text: "Dog Behavior", link: "#" },
              { text: "Dog Health & Wellness", link: "#" },
              { text: "Dog Training", link: "#" },
              { text: "Other Dog Information", link: "#" },
            ]}
            title={"DOGS & PUPPIES"}
            he={"250px"}
            we={"230px"}
            navlink={"/"}
          />
          <Dropdown
            texts={[
              { text: "Cat Adoption", link: "#" },
              { text: "Cat Breeds", link: "#" },
              { text: "Feeding Your Cat", link: "#" },
              { text: "Cat Behavior", link: "#" },
              { text: "Cat Health & Wellness", link: "#" },
              { text: "Cat Training", link: "#" },
              { text: "Other Cat Information", link: "#" },
            ]}
            title={"CATS & KITTENS"}
            he={"250px"}
            we={"230px"}
            navlink={"/"}
          />
          <Dropdown
            texts={[
              { text: "Birds", link: "#" },
              { text: "Exotic Pets", link: "#" },
              { text: "Guinea Pigs", link: "#" },
              { text: "Horses", link: "#" },
              { text: "Rabbits", link: "#" },
              { text: "Reptiles", link: "#" },
              { text: "Small & Furry Pets", link: "#" },
            ]}
            title={"OTHER TYPES OF PETS"}
            he={"250px"}
            we={"250px"}
            navlink={"/"}
          />
        </HStack>
      </Box>

      <Box
        display={{ base: "block", lg: "none" }}
        w={"100%"}
        boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Sidebar hv={statue} handleTogleSidebar={handleTogleSidebar} />
        <Box
          w={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          h={"70px"}
        >
          <Box w={"200px"} ml={4}>
            <Image
              src="https://drive.google.com/uc?id=1RZumzqhGMEoL2aOB-RmBtT6wmO7G7VZf"
              alt=""
            />
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            h={"70px"}
            fontSize={32}
            color={"#6504b5"}
            gap={"15px"}
            mr={4}
          >
            {" "}
            <AiTwotoneHeart /> <GiHamburgerMenu
              onClick={handleTogleSidebar}
            />{" "}
          </Box>
        </Box>
      </Box>
    </>
  );
};
