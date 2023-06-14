import { Box, Text, Image, Button,HStack, Menu, MenuButton, MenuList, MenuItem, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody, Popover } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { AiTwotoneHeart } from 'react-icons/ai'
import { ChevronDownIcon } from '@chakra-ui/icons';
import Dropdown from './Dropdownmenu';

const Navbar = () => {
    return (
        <>
        <Box  h={"70px"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
            <Box  w={"50%"} h={"100%"} display={"flex"} justifyContent={"left"} alignItems={"center"} gap={"50px"} >
                <Box w={"250px"} ml={"40px"}>
                    <Image src={"https://drive.google.com/uc?id=1RZumzqhGMEoL2aOB-RmBtT6wmO7G7VZf"} alt='' w={"100%"} />
                </Box>
                <Box  fontWeight={"extrabold"} fontSize={"small"} fontFamily={"sans-serif"} color={"#6504b5"} >
                    <Link>ALL ABOUT PETS</Link>
                </Box>

            </Box>

            <Box  width={"50%"} h={"100%"}display={'flex'} alignItems={'center'} justifyContent={"right"} >
                <Box   mr={"10%"} h={"100%"} w={"50%"} display={"flex"}  justifyContent={"center"} alignItems={"center"}>
                    <Box  fontSize={"1.9rem"} w={"29%"} h={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} ><AiTwotoneHeart /></Box>
                     <Box borderLeft={"1px solid"} fontWeight={"bold"} fontSize={"1.1rem"}w={"29%"} h={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} ><Link>Sign Up</Link> </Box>
                     <Box  fontWeight={"bold"} fontSize={"1.1rem"}w={"29%"} h={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} ><Link>Log In</Link></Box>  
                </Box>


               

            </Box>
        </Box>

<HStack bg={"#6504b5"}color={"white"} height={"50px"} justifyContent={'center'} gap={"8%"} fontSize={"sm"} fontWeight={"bold"} >

        
    <Dropdown texts={[{text:"first line",link:"#"},{text:"first line",link:"#"},{text:"first line",link:"#"}]}title={"CATS & KITTENS"} navlink={"/"} />
    <Dropdown texts={[{text:"first line",link:"#"},{text:"first line",link:"#"},{text:"first line",link:"#"}]}title={"CATS & KITTENS"} navlink={"/"} />
    <Dropdown texts={[{text:"first line",link:"#"},{text:"first line",link:"#"},{text:"first line",link:"#"}]}title={"OTHER TYPES OF PETS"} navlink={"/"} />
    <Dropdown texts={[{text:"first line",link:"#"},{text:"first line",link:"#"},{text:"first line",link:"#"}]}title={"OTHER TYPES OF PETS"} navlink={"/"} />
    
</HStack>
       
        </>
    )
}

export default Navbar
