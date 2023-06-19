import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { useDispatch, useSelector } from "react-redux"
import { Box, Text, Button, Image } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { DetailspageData, getAdoptionData } from '../../Redux/adoptionReducer/action';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const DetailsPage = () => {
  const petId = useParams()
  console.log(petId)
  const [loading, setLoading] = useState(false)

  let data = useSelector(store => store.adoptionPetsReducer.detailsPageData)[0]
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(DetailspageData(petId))
  }, [])
  console.log(data)


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(true)
    }, 2000);

    return () => clearInterval(interval);
  }, []);




  return (
    <Box>
      {!loading ? (<Button>Loading...</Button>) : (
        <Box backgroundColor={"#efeef1 "} paddingTop={"50px"} display={"flex"}>
          <Box width={"85%"} display={"flex"} margin={"auto"} borderRadius={"2xl"} >
            <Box className='Details_left' width={"65%"} marginRight={"3%"} backgroundColor={"white"} border={"1px solid #efeef1"} borderRadius={"2xl"}>

              <Carousel responsive={responsive}>
                {data?.image.map((item) => {
                  return (
                    <Image p={5} margin={"auto"} src={item} alt={data.name} height={"300px"} />
                  )
                })}
              </Carousel>;
              <Box>
                <Text fontSize='4xl' display={"flex"} paddingLeft={"20px"}>{data?.name}</Text>

                <Box display={"flex"} gap={10} paddingLeft={"20px"} margin={" 20px 0px 10px 10px"}>
                  <Text fontSize='1xl' > {data?.breed}</Text>
                  <Text fontSize='1xl' > {data?.location}</Text>
                </Box>
                <Box width="96%" margin={"auto"} marginTop={"5px"} borderBottom={"1px solid grey"}></Box>

                <Box display={"flex"} gap={10} paddingLeft={"20px"} margin={" 20px 0px 10px 10px"}>
                  <Text fontSize='1xl' > {data?.age}</Text>
                  <Text fontSize='1xl'> {data?.gender}</Text>
                  <Text fontSize='1xl' > {data?.size}</Text>
                  <Text fontSize='1xl' > {data?.color}</Text>
                </Box>
                <Box width="96%" margin={"auto"} marginTop={"5px"} borderBottom={"1px solid grey"}></Box>

                <Box>
                  <Text fontSize='3xl' display={"flex"} padding={"20px 0px 0px 20px"}>About</Text>
                  <Box className='Characteristics'>
                    <Text fontSize='2xl' display={"flex"} padding={"20px 0px 0px 20px"}  >CHARACTERISTICS</Text>
                    <Text fontSize='1xl' display={"flex"} padding={"0px 0px 0px 20px"} >Independent, Dignified, Playful, Smart</Text>
                  </Box>
                  <Box className='health'>
                    <Text fontSize='2xl' display={"flex"} padding={"20px 0px 0px 20px"}  >HEALTH</Text>
                    <Text fontSize='1xl' display={"flex"} padding={"0px 0px 0px 20px"} >{data?.health}</Text>
                  </Box>
                  <Box className='adoption_fee'>
                    <Text fontSize='2xl' display={"flex"} padding={"20px 0px 0px 20px"}  >ADOPTION FEE</Text>
                    <Text fontSize='1xl' display={"flex"} padding={"0px 0px 0px 20px"} >{data?.price}</Text>
                  </Box>
                </Box>

                <Box className='petfinder_security_steps'>
                  <Box width="96%" margin={" 20px 0px 10px 10px"} borderBottom={"1px solid grey"}></Box>
                  <Text fontSize='1xl' display={"flex"} textAlign={"left"} padding={"0px 0px 0px 20px"} >Petfinder recommends that you should always take reasonable security steps before making online payments.</Text>
                  <Box width="96%" margin={" 20px 0px 10px 10px"} borderBottom={"1px solid grey"}></Box>
                </Box>

                <Box>
                  <Text fontSize='4xl' display={"flex"} padding={"20px 0px 0px 20px"} color={"#4d4753"}>Meet {data?.name}
                  </Text>
                  <Text fontSize='1xl' display={"flex"} padding={"2px 20px 0px 20px"} textAlign={"left"} >
                    Hey, I am {data?.name}! I am a playful and adventurous guy who is ready to join you as the newest member of your family! I might not be the most cuddly and affectionate guy in the world, but I am a great listener and I love going for walks. I am not one to pull on leash, or zig zag around on walks. I love to explore, and sometimes I get the zoomies when I am playing out in the yard. I like to play with toys, I know basic commands and I am treat motivated! I am okay with other dogs but sometimes like to have my own space too. If I sound like a good fit for you, stop in today and meet me!</Text>
                  <Text fontSize='1xl' display={"flex"} padding={"20px 20px 0px 20px"} textAlign={"left"}>
                    {data?.name} is neutered, microchipped and current on vaccines. His adoption fee is {data?.price}. Please email adoptions@hstt.org for more information.
                  </Text>

                  <Text fontSize='1xl' display={"flex"} padding={"20px 20px 0px 20px"} textAlign={"left"}>
                    *We get to know each dog as an individual and will do our best to describe each dog based on personality and the behavior we have observed rather than a breed label.
                  </Text>

                </Box>

              </Box>
            </Box>

            <Box className='Details_right' width={"35%"} backgroundColor={"white"} border={"1px solid #efeef1"} borderRadius={"2xl"} height={"600px"}>

              <Box backgroundColor={"#6504b5"} color={"white"} borderRadius={"2xl"} marginBottom={"60px"}>
                <Text fontSize={"20px"} padding={"10px"}>Considering {data?.name} for adoption?</Text>
                <Button width={"60%"} border={"1px solid white"} color={"#6504b5"} backgroundColor={"white"} fontSize={"20px"} borderRadius={"15px"}
                  _hover={{ backgroundColor: "#6504b5", color: "white" }}>
                  Adopt
                </Button>
                <Button border={"1px solid white"} backgroundColor={"white"} color={"#6504b5"} borderRadius={"15px"} width={"60%"} margin={"20px 0px 40px"}
                  _hover={{ backgroundColor: "#6504b5", color: "white" }}>
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
                    <MdEmail />
                  </Box>
                  <Text fontSize={"20px"} marginLeft={"14px"}>adoptions@hstt.org</Text>
                </Box>

                <Box display={"flex"} marginTop={"20px"}>
                  <Box margin={"10px 0px 0px 20px"} >
                    <  FiPhone />
                  </Box>
                  <Text fontSize={"20px"} marginLeft={"14px"}>9090909090</Text>
                </Box>

              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default DetailsPage