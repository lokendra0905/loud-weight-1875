import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const TexthoverEfect = ({ text, fontsize, Scolor, Ecolor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <>
      <Box textAlign="center">
        <Text
          fontSize={fontsize}
          display="inline-block"
          position="relative"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          cursor={"pointer"}
          color={isHovered ? "white" : "#6504b5"}
          fontWeight={"bold"}
        >
          <Text
            as="span"
            position="relative"
            _before={{
              content: `''`,
              position: "absolute",
              left: 0,
              top: 0,
              width: isHovered ? "100%" : "0",
              height: "100%",
              background: `linear-gradient(to right,${Scolor}, ${Ecolor})`,
              pointerEvents: "none",
              zIndex: -1,
              transition: "width 1s",
            }}
          >
            {text}
          </Text>
        </Text>
      </Box>
    </>
  );
};

export default TexthoverEfect;
