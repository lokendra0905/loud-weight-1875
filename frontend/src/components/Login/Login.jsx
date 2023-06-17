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
import axios from "axios";
import React, { useState } from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userDetails } from "../../Redux/loginReducer/action";


export const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogin = ()=>{
    const loginData = {
      email,
      pass:password
    }

      dispatch(userDetails(loginData))
      if (email.includes("@petconnects.com")) {
        navigate("/admindashboard");
      } else {
        navigate("/");
      }
    // setEmail("")
    // setPassword("")
  }

  return (
    <Box
      bg="#f9efef"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w={{ base: '300px', md: '400px', lg: '600px' }}
        m="auto"
        p={50}
        rounded={10}
        bg="white"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Heading fontWeight={500}>Login</Heading>
        <VStack m="auto" p={{ base: '10px', md: '20px', lg: '50px' }} spacing={5}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
          </FormControl>
        </VStack> 
        <Button bg="#673ab7" color="white" onClick={handleLogin}>
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
