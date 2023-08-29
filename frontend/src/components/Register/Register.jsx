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
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { registerUser } from "../../Redux/registerReducer/action";
import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../../Redux/registerReducer/actionTypes";
import axios from "axios";
export const Register = () => {
  const [email, setEmail] = useState("");
  const [fName, setFname] = useState("");
  const [LName, setLname] = useState("");
  const [password, setPass] = useState("");
  const toast = useToast();

  const dispatch = useDispatch();
  const handleRegister = () => {
    const regData = {
      email,
      password,
      name: `${fName + " " + LName}`,
    };
    dispatch({ type: REGISTER_REQUEST });
    axios
      .post(`https://petconnects-aml6.onrender.com/users/register`, regData)
      .then((res) => {
        dispatch({ type: REGISTER_SUCCESS });
        toast({
          position: "top",
          title: `${res.data.message}`,
          status: "success",
          duration: 1000,
          isClosable: true,
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        toast({
          position: "top",
          title: `${err.response.data.error}`,
          status: "success",
          duration: 1000,
          isClosable: true,
        });
        dispatch({ type: REGISTER_FAILURE });
      });
    // dispatch(registerUser(regData));
    setEmail("");
    setFname("");
    setLname("");
    setPass("");
  };

  return (
    <Box
      bg="#f9efef"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w={{ base: "300px", md: "400px", lg: "600px" }}
        m="auto"
        p={50}
        rounded={10}
        bg="white"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        textAlign="center"
      >
        <Heading fontWeight={500}>Signup</Heading>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={5} mt={10}>
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter name"
              onChange={(e) => setFname(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPass(e.target.value)}
            />
          </FormControl>
        </SimpleGrid>
        <Button
          mt={10}
          bg="#673ab7"
          color="black"
          variant={"solid"}
          onClick={handleRegister}
        >
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
