import React from 'react'
import {Box,Image} from "@chakra-ui/react"
import {useNavigate}  from "react-router-dom"
const PetCard = (props) => {
    const {_id}=props
    const navigate=useNavigate()
    const handleBtn=()=>{
     navigate(`/DetailsPage/${_id}`)
    }
  return (
    
     <Box height={"250px"} _hover={{ border: "1px solid blue" }} backgroundColor={"#ffffff "} onClick={handleBtn}>
     <Image src={props.image[0]} alt="" width="100%" height={"200px"} />
     <Box>{props.name}</Box>
     <Box display={"flex"} justifyContent={"space-evenly"} >
       <Box>{props.age}</Box>
       <Box>{props.breed}</Box>
     </Box>
     <Box>{props.distance}</Box>
  </Box>
  )
}

export default PetCard