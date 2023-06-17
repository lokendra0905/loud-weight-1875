import React from 'react'
import { Box, Button, SimpleGrid, border } from "@chakra-ui/react"
import Filters from './Filters'
const CatAdoption = () => {
let data=[]
  return (
    <Box>
    <Box backgroundColor={"#efeef1 "} display={"flex"}>
      <Box border="1px solid #ffffff" width={"30%"}
      >
        <Filters
        />
      </Box>
      
      <SimpleGrid
        display={"grid"}
        gridTemplateColumns="repeat(4,23%)"
        spacing={25}
        textAlign='center'
        width={"70%"}
        marginRight={"8%"}
        marginTop={"20px"}

      >

        {data.map((el) => (
          <Box height={"300px"} _hover={{ border: "1px solid blue" }} backgroundColor={"#ffffff "}>
            <img src={el.image} alt="" width="100%" height={"200px"} />
            <Box>{el.name}</Box>
            <Box display={"flex"} justifyContent={"space-evenly"} >
              <Box>{el.age}</Box>
              <Box>{el.breed}</Box>
            </Box>
            <Box>{el.distance}</Box>
          </Box>
        ))}
      </SimpleGrid>
    
      </Box>
      <Box  marginBottom={"20px"} marginLeft={"60%"} >
      <Button backgroundColor={"teal"} width={"70px"} height={"30px"} color={"white"} margin={"0px 20px"}>Previous</Button>
      <Button backgroundColor={"teal"} width={"70px"} height={"30px"} color={"white"}>Next</Button>
      </Box>
    </Box>
  )
}

export default CatAdoption