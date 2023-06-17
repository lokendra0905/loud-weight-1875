import React from "react";
import { Box, ListItem, UnorderedList, useDisclosure } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

const Dropdown = ({ texts, title, navlink, we, he }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      h="100%"
      position={"relative"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <NavLink to={navlink}>{title}</NavLink>

      <UnorderedList
        as={Box}
        listStyleType={"none"}
        pl={"20px"}
        w={we}
        textAlign={"left"}
        opacity={isOpen ? 100 : 0}
        h={isOpen ? he : "0"}
        bg="#6504b5"
        transition="height 0.3s, opacity 0.3s"
        position="absolute"
        bottom="0"
        borderRadius={"0px 0px 10px 10px"}
        top={"100%"}
        overflow={"hidden"}
      >
        {texts.map((e, i) => (
          <ListItem mt={"10px"} key={i}>
            <Link to={e.link}>{e.text}</Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default Dropdown;
