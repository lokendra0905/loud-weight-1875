import { Box, Button, VStack } from "@chakra-ui/react"



export const AdminSideBar = ()=>{
    return(
        <Box bg="gray.100">
          <VStack
            w={200}
            bg="gray.100"
            display="flex"
            alignItems="left"
          >
            <Button>Dashboard</Button>
            <Button>Pets & Adoption</Button>
            <Button>Pets & Shelter</Button>
          </VStack>
        </Box>
    )
}