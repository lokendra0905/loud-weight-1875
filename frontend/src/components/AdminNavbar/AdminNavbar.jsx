import {
  Box,
  Flex,
  IconButton,
  Image,
} from "@chakra-ui/react";
import petconnectLogo from "./logo/petconnect-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";


export const AdminNavbar = () => {
  return (
    <Box border="1px solid gray">
      <Flex align="center">
        <IconButton icon={<GiHamburgerMenu />} />
        <Image src={petconnectLogo} alt="logo" h="24px" /> {/* Logo */}
      </Flex>
    </Box>
  );
};
