import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  Image,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import petconnectLogo from "./logo/petconnect-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const AdminNavbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box border="1px solid gray">
      <Flex align="center">
        <IconButton icon={<GiHamburgerMenu />} />
        <Image src={petconnectLogo} alt="logo" h="24px" /> {/* Logo */}
      </Flex>
    </Box>
  );
};
