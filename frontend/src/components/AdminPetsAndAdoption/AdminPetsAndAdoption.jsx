import { Box, Flex, Grid } from "@chakra-ui/react";
import { AdminSideBar } from "../AdminDashboard/AdminSideBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPets } from "../../Redux/adminPetsReducer/action";
import { AdminPetsCard } from "./AdminPetsCard";

export const AdminPetsAndAdoption = () => {
  const AllPetsList = useSelector((store) => store.adminPetsReducer.petsList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPets);
  }, []);
  console.log(AllPetsList);
  return (
    <Box>
      <Flex>
        <AdminSideBar />
        <Box flex={1} >
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {
                AllPetsList?.map((pets)=>(
                    <AdminPetsCard key={pets._id} {...pets}/>
                ))
            }
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};
