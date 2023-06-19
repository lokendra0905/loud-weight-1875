import React,{useEffect, useState} from 'react'
import { Box, SimpleGrid, border,Button } from "@chakra-ui/react"
import {useDispatch, useSelector} from "react-redux"
import {useNavigate}  from "react-router-dom"
import Filters from './Filters'
import { getAdoptionData } from '../../Redux/adoptionReducer/action'
import PetCard from './PetCard'
const DogsAdoption = () => {


  let store=useSelector(store=>store.adoptionPetsReducer.adoptionData)
  let data=store.data
  const [page,setPage]=useState(1)
  const dispatch=useDispatch()
  useEffect(()=>{
    const data={
      params:{
      page:page,
      }
    }
    dispatch(getAdoptionData(data))
    console.log(data)
  },[page])
const {totalPages}=store
console.log(store)
  return (
    <Box>
    <Box backgroundColor={"#efeef1 "} display={"flex"}>
      <Box border="1px solid #ffffff" width={"20%"}
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
        {data?.map((el) => (
          <PetCard {...el} key={el._id} />
         
        ))}
      </SimpleGrid>
    
      </Box>
      <Box  marginBottom={"20px"} marginLeft={"30%"} >
      <Button backgroundColor={"teal"}  width={"70px"} height={"30px"} color={"white"} margin={"0px 20px"} _hover={{ backgroundColor:"teal", color:"white"}} isDisabled={page==1} onClick={()=>setPage((prev)=>prev-1)}>Previous</Button>
      <Button backgroundColor={"teal"} width={"70px"} height={"30px"} color={"white"} _hover={{ backgroundColor:"teal", color:"white"}} isDisabled={page==totalPages} onClick={()=>setPage((prev)=>prev+1)}>Next</Button>
      </Box>
    </Box>
  )
}

export default DogsAdoption