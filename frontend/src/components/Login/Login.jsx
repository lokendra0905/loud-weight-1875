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
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <Box
      bg="#f9efef"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w="40%"
        m="auto"
        p={50}
        rounded={10}
        bg="white"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Heading fontWeight={500}>Login</Heading>
        <VStack m="auto" p={50} spacing={5}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter password" />
          </FormControl>
        </VStack>
        <Button bg="#673ab7" color="white">
          Login
        </Button>
        <Text mt={5}>Or log in with:</Text>
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

          <Text>Need an account?</Text>
          <NavLink to="/register"><Text color="#5e03f1">Signup</Text></NavLink>

        </HStack>
      </Box>
    </Box>
  );
};
