import { Button, Stack, Box } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ page, setpage }) => {
  const button = new Array(100 / 20).fill("");
  return (
    <Box>
      {button.map((_, i) => {
        return (
          <Button
            margin={1}
            disabled={page === 1}
            onClick={() => setpage(i + 1)}
          >
            {i + 1}
          </Button>
        );
      })}
    </Box>
  );
};

export default Pagination;
