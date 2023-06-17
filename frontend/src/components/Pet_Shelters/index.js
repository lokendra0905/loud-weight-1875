import { Avatar, Box, Center, Flex, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import Data from "../db.json"
import ShelterList from './ShelterList'

const Pet_Shelters = () => {
    let Info = Data.data
    useEffect(() => {
        console.log(Info);
    }, []);

    return (
        <Box>
            <Heading>Pet_Shelters Component</Heading>
           <ShelterList />
        </Box>
    )
}

export default Pet_Shelters