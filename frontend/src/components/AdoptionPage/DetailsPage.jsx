import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';

import { Box, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

let data = {
  image: ["https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg",
    "https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg",
    "https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg"]
  ,
  name: "Mac",
  breed: "Shih Tuz",
  location: "New Delhi",
  age: "Puppy",
  gender: "female",
  size: "Medium",
  color: "Brown",
  health: "Vaccinations up to date"

}
const DetailsPage = () => {
  // const [Img,setImg]=useState(data.image[0])
  //   let i=0
  //   setInterval(()=>{
  //  if(i==data.image.length){
  //   i=0
  //  }
  //  else {
  //   i++
  //   setImg(data.image[i])
  //  }
  //   },2000)
  return (
    <Box backgroundColor={"#efeef1 "} paddingTop={"50px"} display={"flex"}>
      {/* <Box className='carosoul'>
      <img src={Img} alt="" />
    </Box> */}
      <Box width={"80%"} display={"flex"} margin={"auto"} borderRadius={"2xl"} >
        <Box className='Details_left' width={"65%"} marginRight={"3%"} backgroundColor={"white"} border={"1px solid #efeef1"} borderRadius={"2xl"}>
          <Text fontSize='5xl' display={"flex"} paddingLeft={"20px"}>{data.name}</Text>

          <Box display={"flex"} gap={10} paddingLeft={"20px"} margin={" 20px 0px 10px 10px"}>
            <Text fontSize='1xl' >Breed : {data.breed}</Text>
            <Text fontSize='1xl' >Location : {data.location}</Text>
          </Box>
          <Box width="96%" margin={"auto"} marginTop={"5px"} borderBottom={"1px solid grey"}></Box>

          <Box display={"flex"} gap={10} paddingLeft={"20px"} margin={" 20px 0px 10px 10px"}>
            <Text fontSize='1xl' > Age : {data.age}</Text>
            <Text fontSize='1xl' >Gender : {data.gender}</Text>
            <Text fontSize='1xl' > Size : {data.size}</Text>
            <Text fontSize='1xl' > Color : {data.color}</Text>
          </Box>
          <Box width="96%" margin={"auto"} marginTop={"5px"} borderBottom={"1px solid grey"}></Box>

          <Box>
            <Text fontSize='4xl' display={"flex"} padding={"20px 0px 0px 20px"}>About</Text>
            <Box className='Characteristics'>
              <Text fontSize='2xl' display={"flex"} padding={"20px 0px 0px 20px"}  >CHARACTERISTICS</Text>
              <Text fontSize='1xl' display={"flex"} padding={"0px 0px 0px 20px"} >Independent, Dignified, Playful, Smart</Text>
            </Box>
            <Box className='health'>
              <Text fontSize='2xl' display={"flex"} padding={"20px 0px 0px 20px"}  >HEALTH</Text>
              <Text fontSize='1xl' display={"flex"} padding={"0px 0px 0px 20px"} >{data.health}</Text>
            </Box>
            <Box className='adoption_fee'>
              <Text fontSize='2xl' display={"flex"} padding={"20px 0px 0px 20px"}  >ADOPTION FEE</Text>
              <Text fontSize='1xl' display={"flex"} padding={"0px 0px 0px 20px"} >{data.price}</Text>
            </Box>
          </Box>

          <Box className='petfinder_security_steps'>
            <Box width="96%" margin={" 20px 0px 10px 10px"} borderBottom={"1px solid grey"}></Box>
            <Text fontSize='1xl' display={"flex"} textAlign={"left"} padding={"0px 0px 0px 20px"} >Petfinder recommends that you should always take reasonable security steps before making online payments.</Text>
            <Box width="96%" margin={" 20px 0px 10px 10px"} borderBottom={"1px solid grey"}></Box>
          </Box>

          <Box>
            <Text fontSize='4xl' display={"flex"} padding={"20px 0px 0px 20px"} color={"#4d4753"}>Meet {data.name}
            </Text>
            <Text fontSize='1xl' display={"flex"} padding={"2px 20px 0px 20px"} textAlign={"left"} >
              Hey, I am {data.name}! I am a playful and adventurous guy who is ready to join you as the newest member of your family! I might not be the most cuddly and affectionate guy in the world, but I am a great listener and I love going for walks. I am not one to pull on leash, or zig zag around on walks. I love to explore, and sometimes I get the zoomies when I am playing out in the yard. I like to play with toys, I know basic commands and I am treat motivated! I am okay with other dogs but sometimes like to have my own space too. If I sound like a good fit for you, stop in today and meet me!</Text>
            <Text fontSize='1xl' display={"flex"} padding={"20px 20px 0px 20px"} textAlign={"left"}>
              {data.name} is neutered, microchipped and current on vaccines. His adoption fee is {data.price}. Please email adoptions@hstt.org for more information.
            </Text>

            <Text fontSize='1xl' display={"flex"} padding={"20px 20px 0px 20px"} textAlign={"left"}>
              *We get to know each dog as an individual and will do our best to describe each dog based on personality and the behavior we have observed rather than a breed label.
            </Text>

          </Box>

        </Box>
        <Box className='Details_right' width={"30%"} backgroundColor={"white"} border={"1px solid #efeef1"} borderRadius={"2xl"}>

          <Box backgroundColor={"#6504b5"} color={"white"} borderRadius={"2xl"} marginBottom={"60px"}>
            <Text fontSize={"20px"} padding={"10px"}>Considering {data.name} for adoption?</Text>
            <Button width={"60%"} border={"1px solid white"} color={"#6504b5"} backgroundColor={"white"} fontSize={"20px"} borderRadius={"15px"}
      _hover={{ backgroundColor:"#6504b5", color:"white"}}>
              Adopt
            </Button>
            <Button border={"1px solid white"} backgroundColor={"white"} color={"#6504b5"} borderRadius={"15px"} width={"60%"} margin={"20px 0px 40px"}   
       _hover={{ backgroundColor:"#6504b5", color:"white"}}>
              Start your inquiry
            </Button>
          </Box>

          <Box >
            <Text fontSize={"2xl"} width={"70%"} display={"flex"} textAlign={"center"} margin="auto" >Humane Society of Truckee-Tahoe</Text>
            <Text>New Delhi</Text>
            <Box>
            <Box display={"flex"} marginTop={"40px"}>
              <Box margin={"10px 0px 0px 20px"} >
              <FaMapMarkerAlt />
              </Box>
            <Text fontSize={"20px"} marginLeft={"14px"}>Location Address</Text>
            </Box>
            <Text fontSize={"15px"} display={"flex"} textAlign={"left"} marginLeft={"20%"}>{data.location}</Text>
            </Box>
          
            <Box display={"flex"} marginTop={"20px"}>
            <Box margin={"10px 0px 0px 20px"} >
            <MdEmail/>
              </Box>
              <Text fontSize={"20px"} marginLeft={"14px"}>adoptions@hstt.org</Text>
            </Box>

            <Box display={"flex"} marginTop={"20px"}>
            <Box margin={"10px 0px 0px 20px"} >
            <  FiPhone/>
              </Box>
              <Text fontSize={"20px"} marginLeft={"14px"}>9090909090</Text>
            </Box>

          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailsPage