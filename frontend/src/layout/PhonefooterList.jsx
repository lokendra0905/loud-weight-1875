import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React, { useState } from "react";

export const PhonefooterList = ({ title, h, data }) => {
  const [sowlist, Setsowlist] = useState(false);

  const handleClick = () => {
    Setsowlist(!sowlist);
  };

  return (
    <Box
      onClick={handleClick}
      color={"white"}
      w={"90%"}
      borderTop={"1px solid white"}
      borderBottom={"1px solid white"}
      pt={"15px"}
      pb={"15px"}
    >
      <Text fontWeight={"bold"} fontSize={"15px"}>
        {title}
      </Text>
      <UnorderedList
        overflow={"hidden"}
        h={sowlist ? h : "0px"}
        listStyleType={"none"}
        fontSize={"sm"}
        transition="height 0.3s, opacity 0.3s"
      >
        {data?.map((e, i) => (
          <ListItem key={i}>{e.name}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
