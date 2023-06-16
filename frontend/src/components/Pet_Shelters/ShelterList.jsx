import React, { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import Data from "../db.json";
import ShelterCard from "./ShelterCard";
const ShelterList = () => {
  const [hosteldata, setHostelData] = useState([]);
  var Info = Data.data;
  useEffect(() => {
    console.log(Info);
    setHostelData(Info);
  }, []);

  

  return (
    <Box>
      <SimpleGrid
        style={{ margin: "auto" }}
        columns={{ sm: 2, md: 3, lg: 4, base: 1 }}
        spacing="15px"
      >
        {hosteldata.map((item) => {
          return <ShelterCard key={item.id} {...item} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default ShelterList;
