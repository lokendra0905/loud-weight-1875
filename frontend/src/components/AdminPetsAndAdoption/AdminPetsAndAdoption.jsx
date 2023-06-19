import { Box, Flex, Grid } from "@chakra-ui/react";
import { AdminSideBar } from "../AdminDashboard/AdminSideBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPets } from "../../Redux/adminPetsReducer/action";
import { AdminPetsCard } from "./AdminPetsCard";
import { useSearchParams } from "react-router-dom";

export const AdminPetsAndAdoption = () => {
  const AllPetsList = useSelector((store) => store.adminPetsReducer.petsList);
  let refreshThePage = useSelector((store)=>store.adminPetsReducer.refresh)
  
  const [refresh, setRefresh] = useState(false)
  const shouldRenderAccordion = true;
  const dispatch = useDispatch();

  
  const handleRefresh = ()=>{
    setRefresh(!refresh)
  }
  useEffect(() => {
    dispatch(getAllPets);
  }, [refresh,refreshThePage]);
  console.log(AllPetsList);

  return (
    <Box>
      <Flex>
        <AdminSideBar shouldRenderAccordion={shouldRenderAccordion}/>
        <Box flex={1} p={10}>
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
