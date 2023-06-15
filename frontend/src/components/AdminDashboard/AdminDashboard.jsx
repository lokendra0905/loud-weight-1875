import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const AdminDashboard = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8080/users/",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
        .then((res)=>{
            console.log(res);
            setData(res)
        })
        .catch(error=>console.log(error))
    },[])
    console.log("...data",data);

  return (
    <Box border="1px solid black">
      <Flex flex="1">
        <Box border="1px solid black" bg="gray.100">
          <VStack
            w={200}
            border="1px solid red"
            bg="gray.100"
            display="flex"
            alignItems="left"
          >
            <Button>Dashboard</Button>
            <Button>Pets & Adoption</Button>
            <Button>Pets & Shelter</Button>
          </VStack>
        </Box>
        <Box flex="1" p={5}>
          {" "}
          {/* Add flex="1" to make it take up remaining space */}
          <Grid templateColumns={"repeat(4, 1fr)"} border="1px solid black" gap={10} textAlign={"left"}>
            <GridItem border="1px solid black" rounded={5} p={4}>
              <Text fontSize={20} mb={10}>Total Users</Text>
              <Text fontSize={30} fontWeight={500}>234</Text>
            </GridItem>
            <GridItem border="1px solid black" rounded={5} p={4}>
              <Text fontSize={20} mb={10}>Total Users</Text>
              <Text fontSize={30} fontWeight={500}>234</Text>
            </GridItem>
            <GridItem border="1px solid black" rounded={5} p={4}>
              <Text fontSize={20} mb={10}>Total Users</Text>
              <Text fontSize={30} fontWeight={500}>234</Text>
            </GridItem>
            <GridItem border="1px solid black" rounded={5} p={4}>
              <Text fontSize={20} mb={10}>Total Users</Text>
              <Text fontSize={30} fontWeight={500}>234</Text>
            </GridItem>
          </Grid>
          <Box mt={30}>
            <Heading>List of Users</Heading>
          <Table variant="striped" colorScheme="gray" border="1px solid black">
      <Thead >
        <Tr border="1px solid black">
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Role</Th>
        </Tr>
      </Thead>
      <Tbody border="1px solid black">
        {data.map((user, index) => (
          <Tr key={index}>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.role}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
