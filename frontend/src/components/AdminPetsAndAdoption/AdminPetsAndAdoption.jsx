import { Box, Flex, Grid } from "@chakra-ui/react";
import { AdminSideBar } from "../AdminDashboard/AdminSideBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPets } from "../../Redux/adminPetsReducer/action";
import { AdminPetsCard } from "./AdminPetsCard";

export const AdminPetsAndAdoption = () => {
  const AllPetsList = useSelector((store) => store.adminPetsReducer.petsList);
  const [refresh, setRefresh] = useState(false)

  const dispatch = useDispatch();
  const handleRefresh = ()=>{
    setRefresh(!refresh)
  }
  useEffect(() => {
    dispatch(getAllPets);
  }, [refresh]);

  return (
    <Box>
      <Flex>
        <AdminSideBar />
        <Box flex={1} >
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
            {
                AllPetsList?.map((pets)=>(
                    <AdminPetsCard key={pets._id} {...pets} handleRefresh={handleRefresh}/>
                ))
            }
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};
