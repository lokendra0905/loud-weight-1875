import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
} from "@chakra-ui/react";
import petconnectLogo from "./logo/petconnect-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";


export const AdminNavbar = () => {
  return (
    <Box bg="#dbdbf5" boxShadow= "rgba(0, 0, 0, 0.16) 0px 1px 4px" w="100%" position="sticky" top={0} zIndex="10">
      <Flex alignItems="center" justifyContent={"space-between"} >
        <Image src={petconnectLogo} alt="logo" w={150} ml={20}/> {/* Logo */}
        <Button mr={20} p={2} mt={2} mb={2}>Logout</Button>
      </Flex>
    </Box>
  );
};
