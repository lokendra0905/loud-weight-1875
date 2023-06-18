import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Table,
  Text,
  Th,
  Thead,
  Tr,
  useMediaQuery
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Redux/adminUserReducer/action";
import { AdminUserCard } from "./AdminUsersCard";
import { AdminSideBar } from "./AdminSideBar";
import { getAllPets, getAllPetsNumber } from "../../Redux/adminPetsReducer/action";

export const AdminDashboard = () => {
  const dispatch = useDispatch();
  const UsersList = useSelector((store) => store.adminUserReducer.allUsers);
  const AllPetsList = useSelector((store) => store.adminPetsReducer.petsList);
  const totalPets = useSelector((store) => store.adminPetsReducer.totalData);

  const [refresh, setRefresh] = useState(false)

  const shouldRenderAccordion = false;
  const handleRefresh = ()=>{
    setRefresh(!refresh)
  }
  useEffect(() => {
    dispatch(getAllUsers);
    dispatch(getAllPetsNumber())
  }, [refresh]);
  const sold = AllPetsList.filter(el => el.status === "Sold");
  
 

  return (
    <Box>
      <Flex flex="1">
        <AdminSideBar shouldRenderAccordion={shouldRenderAccordion}/>
        <Box flex="1" p={5} >
          {" "}
          {/* Add flex="1" to make it take up remaining space */}
          <Grid
            // templateColumns={"repeat(4, 1fr)"}
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
            gap={10}
            textAlign={"left"}
            
          >
            <GridItem rounded={5} p={4} bg="#dbdbf5" boxShadow= "rgba(0, 0, 0, 0.16) 0px 1px 4px">
              <Text fontSize={20} mb={10}>
                Total Users
              </Text>
              <Text fontSize={30} fontWeight={500}>
                234
              </Text>
            </GridItem>
            <GridItem rounded={5} p={4} bg="#dbdbf5" boxShadow= "rgba(0, 0, 0, 0.16) 0px 1px 4px">
              <Text fontSize={20} mb={10}>
                Total Pets
              </Text>
              <Text fontSize={30} fontWeight={500}>
                {totalPets}
              </Text>
            </GridItem>
            <GridItem rounded={5} p={4} bg="#dbdbf5" boxShadow= "rgba(0, 0, 0, 0.16) 0px 1px 4px">
              <Text fontSize={20} mb={10}>
              Total Pets Sold
              </Text>
              <Text fontSize={30} fontWeight={500}>
                {sold.length}
              </Text>
            </GridItem>
            <GridItem rounded={5} p={4} bg="#dbdbf5" boxShadow= "rgba(0, 0, 0, 0.16) 0px 1px 4px">
              <Text fontSize={20} mb={10}>
                New Pets
              </Text>
              <Text fontSize={30} fontWeight={500}>
                11
              </Text>
            </GridItem>
          </Grid>
          <Box mt={50} >
            <Heading mb={30} fontWeight={400}>List of Users</Heading>
            <Table
              variant="striped"
              borderWidth="2px"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            >
              <Thead >
                <Tr>
                  <Th textAlign={"center"}>Name</Th>
                  <Th textAlign={"center"}>Email</Th>
                  <Th textAlign={"center"}>Role</Th>
                </Tr>
              </Thead>
              {UsersList && UsersList.length > 0 &&
                UsersList.map((item) => (
                  <AdminUserCard key={item._id} {...item} handleRefresh={handleRefresh}/>
                ))}
            </Table>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
