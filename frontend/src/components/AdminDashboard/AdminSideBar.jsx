import { Box, Button, VStack } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"



export const AdminSideBar = ()=>{
    return(
        <Box bg="gray.100" >
          <VStack
            w={{ base: '150px', md: '150px', lg: '200px' }}
            bg="gray.100"
            mt={5}
          >
            <Button><NavLink to="/admindashboard">Dashboard</NavLink></Button>
            <Button><NavLink to="/adminpetsandadoption">Pets & Adoption</NavLink></Button>
            <Button>Pets & Shelter</Button>
          </VStack>
        </Box>
    )
}