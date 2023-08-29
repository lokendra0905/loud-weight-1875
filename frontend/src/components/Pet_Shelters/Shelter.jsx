import React, { useState } from "react";
import Sidebar from "./SideBar";
import { Box } from "@chakra-ui/react";

import { useSearchParams } from "react-router-dom";
import ShelterList from "./ShelterList";
import Pagination from "./Pagination";

export const Shelter = () => {
  const [searchparam] = useSearchParams();
  const initpage = searchparam.get("page");
  const [page, setpage] = useState(initpage || 1);

  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap", // Allow items to wrap to the next line on smaller screens
          gap: "10px", // Add some spacing between components
          marginBottom: "10px", // Add space between components and pagination
        }}
      >
        <Box
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            flex: "0 0 calc(15% - 10px)", // Sidebar takes up 15% width with spacing
            marginBottom: "10px", // Add space between sidebar and shelter list
          }}
        >
          <Sidebar page={page} />
        </Box>

        <Box
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            flex: "1", // Shelter list takes up the remaining space
            marginBottom: "10px", // Add space between shelter list and pagination
          }}
        >
          <ShelterList />
        </Box>
      </Box>

      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "30px auto",
        }}
      >
        <Pagination setpage={setpage} page={page} />
      </Box>
    </Box>
  );
};
