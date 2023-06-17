import { Box,Image,FormControl, FormLabel, Input, Button  } from '@chakra-ui/react'
import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'

export const HomePage = () => {
    return (
        <Box h={"100vh"} w={"100%"}>
           <Box w={"100%"} position={"relative"}>
            <Image w={"100%"} src='https://www.petfinder.com/sites/default/files/styles/hero_image_1140_410/public/images/content/1140%20hero%20image_0.jpg?itok=wryBzVcI'/>
           
            <FormControl display={"flex"} left={"20%"} flexDirection={"row"} alignItems={"center"} position={"absolute"} top={"60px"} w={"60%"} h={"60px"} bg={"white"} borderRadius={"10px"} >
 
  <Input type="text" h={"100%"} placeholder="Search terria, kitten, etc" />
<span  >|</span>
 
  <Input type="text" h={"100%"} placeholder="Enter City ,State or Zip" />

  
  

  <Box type="submit" w={"100px"} display={"flex"} alignItems={"center"} justifyContent={"center"} borderRadius={"5px"} h={"40px"} border={"none"} bg={"#6504b5"} color={"white"} m={"10px"} fontSize={"40px%"} ><BiSearchAlt fontSize={"25px"}/></Box>
</FormControl>
           </Box>
        </Box>
    )
}
