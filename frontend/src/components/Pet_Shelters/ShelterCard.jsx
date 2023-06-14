import { Avatar, Box, Button, Center, Flex, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import Data from "../db.json"

const ShelterCard = ({ name, image, rating, location, id }) => {
    const [status, setStatus] = useState(false)


    return (
        <Box>
            <Box borderRadius={"10px"} boxShadow={"rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px"}>
                <Center py={6}>
                    <Box
                        maxW={"250px"}
                        w={"full"}
                        bg={useColorModeValue("white", "gray.800")}
                        // boxShadow={"2xl"}
                        // rounded={'md'}
                        overflow={"hidden"}
                    >

                        <Image
                            h={"100px"}
                            w={"100%"}
                            src={"https://images.unsplash.com/photo-1582068955580-dcc6c0812b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxkb2dzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}
                            objectFit={"cover"}
                        />
                        <Flex justify={"center"} mt={-12}>
                            <Avatar
                                size={"xl"}
                                src={image}
                                alt={"Author"}
                                css={{
                                    border: "2px solid white",
                                }}
                            />
                        </Flex>

                        <Box p={6}>
                            <Stack spacing={0} align={"center"} mb={5}>
                                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                                    {name}
                                </Heading>
                            </Stack>

                            <Stack direction={"column"} justify={"center"} spacing={6}>
                                <Stack spacing={0} align={"center"}>
                                    <Text fontWeight={"400"} textColor={"b"} color={"gray.500"}>
                                        Rating: {rating}
                                    </Text>
                                </Stack>
                                <Stack spacing={0} align={"center"}>
                                    <Heading fontSize={"md"} textColor={"b"} color={"black.500"}>
                                        {location}
                                    </Heading>
                                </Stack>
                            </Stack>
                            <Button
                                w={"full"}
                                mt={8}
                                bg={useColorModeValue("#6A00FF", "#7FFF00")}
                                color={"white"}
                                border="0px"
                                rounded={"md"}
                                _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: "lg",
                                }}
                                onClick={() => setStatus(!status)}
                            >
                                {status ? "Booked" : "Get"}
                            </Button>
                        </Box>
                    </Box>
                </Center>
            </Box>
        </Box>
    )
}

export default ShelterCard;