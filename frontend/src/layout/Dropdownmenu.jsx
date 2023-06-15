import React from 'react';
import { Box, ListItem, UnorderedList, useDisclosure } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';

const Dropdown = ({ texts,title,navlink }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box

            h="100%"
            position={"relative"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
        >
           <NavLink to={navlink} >{title}</NavLink> 
            <Box
                w="100px"
                borderRadius={"0px 0px 40% 40%"}
                opacity={isOpen ? 100 : 0}
                h={isOpen ? '200px' : '0'}
                bg="red.200"
                transition="height 0.3s, opacity 0.3s"
                position="absolute"
                bottom="0"
                top={"50px"}
            >
                <UnorderedList listStyleType={"none"}>
                    {texts.map((e, i) => (<ListItem key={i}><Link to={e.link}>{e.text}</Link></ListItem>))}
                </UnorderedList>
            </Box>
        </Box>
    );
};

export default Dropdown;
