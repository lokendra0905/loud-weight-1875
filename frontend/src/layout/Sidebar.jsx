import { Box,  Image,  List,  ListItem,  UnorderedList } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { GiCrossedBones } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Sidebar = ({ hv, handleTogleSidebar }) => {
  const handleTogle = () => {
    handleTogleSidebar();
  };

  return (
    <Box
      width={"100%"}
      h={"100vh"}
      position={"fixed"}
      bg="transparent"
      backdropFilter="blur(8px)"
      top={0}
      left={0}
      zIndex="8000"
      transform={hv ? "translateX(0%)" : "translateX(-100%)"}
      transition={"transform 800ms ease-in-out"}
    >
      <Box
        bg={"white"}
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
          <AiTwotoneHeart />
          <Box
            as="span"
            transform={hv ? "rotate(360deg)" : "rotate(0deg)"}
            transition={"transform 800ms"}
            onClick={handleTogle}
          >
            <GiCrossedBones />
          </Box>{" "}
        </Box>
      </Box>
      
   <UnorderedList listStyleType={"none"}  mt={"40px"} spacing={"30px"} fontSize={"md"} fontWeight={"bold"} ml={"20px"}color={"#6504b5"} fontFamily={"sans-serif"} >
    <ListItem><Link> ADOPT OR GET INVOLVED</Link></ListItem>
    <ListItem><Link> DOGS & PUPPIES</Link></ListItem>
    <ListItem><Link> CATS & KITTENS</Link></ListItem>
    <ListItem><Link> OTHER TYPES OF PETS</Link></ListItem>
   
   </UnorderedList>

    </Box>
  );
};
