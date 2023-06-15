import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
export const Register = () => {
  return (
    <Box
      bg="#f9efef"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w="50%"
        m="auto"
        p={50}
        rounded={10}
        bg="white"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        textAlign="center"
      >
        <Heading fontWeight={500}>Signup</Heading>
        <SimpleGrid columns={2} spacing={5} mt={10}>
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input type="text" placeholder="Enter name" />
          </FormControl>
          <FormControl >
            <FormLabel>Last Name</FormLabel>
            <Input type="text" placeholder="Enter last name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter password" />
          </FormControl>
        </SimpleGrid>
        <Button mt={10} bg="#673ab7" color="white">
          Signup
        </Button>
        <Text mt={5}>OR</Text>
        <Flex mt={5}>
          <Box m="auto" alignItems="center">
            <Button mr={5}>
              <IconButton color="blue" fontSize="20px" icon={<FcGoogle />} />
              GOOGLE
            </Button>
            <Button>
              <IconButton
                color="blue"
                fontSize="20px"
                icon={<AiOutlineFacebook />}
              />
              FACEBOOK
            </Button>
          </Box>
        </Flex>

        <HStack mt={5} alignItems="center" justifyContent="center">
          <Text>Already have an account?</Text>
          <NavLink to="/login">
            <Text color="#5e03f1">Login</Text>
          </NavLink>
        </HStack>
      </Box>
    </Box>
  );
};
