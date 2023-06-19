import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { NavLink, useSearchParams } from "react-router-dom";
import { addPetDetails, getAllPets } from "../../Redux/adminPetsReducer/action";

export const AdminSideBar = ({ shouldRenderAccordion}) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [petImage, setImage] = useState("");
  const [petName, setName] = useState("");
  const [petage, setAge] = useState("");
  const [petgender, setGender] = useState("");
  const [petlocation, setLocation] = useState("");
  const [petbreed, setBreed] = useState("");
  const [petsize, setSize] = useState("");
  const [petcolor, setColor] = useState("");
  const [pettype, setType] = useState("");
  const [petPrice, setPrice] = useState(0);
  const [pethealth, setHealth] = useState("");
  const [petStatus, setStatus] = useState("");


  const toast = useToast()

  const dispatch = useDispatch();
  useEffect(()=>{
    
},[])

  const handleEdit = () => {
  
    const data = {
      name: petName,
      image: [petImage],
      gender: petgender,
      age: petage,
      location: petlocation,
      breed: petbreed,
      size: petsize,
      color: petcolor,
      type: pettype,
      price: petPrice,
      health: pethealth,
      status: petStatus,
    };
   
    dispatch(addPetDetails(data))
    toast({
      position: "top",
      title: `New Pet has been added`,
      status: "success",
      duration: 1000,
      isClosable: true,
    });
    
  };

  const handleClose = () => {
    // getAllPets()
    setIsModalOpen(false);
  };
  const handleAdd = ()=>{
    setIsModalOpen(true);
  }
  return (
    <Box bg="gray.100">
      <VStack
        w={{ base: "150px", md: "150px", lg: "200px" }}
        bg="gray.100"
        mt={5}
      >
        <Button>
          <NavLink to="/admindashboard">Dashboard</NavLink>
        </Button>
        <Button>
          <NavLink to="/adminpetsandadoption">Pets & Adoption</NavLink>
        </Button>
        <Button>Pets & Shelter</Button>
      </VStack>
      <Box mt={30}>
        {shouldRenderAccordion && 
        <Button colorScheme="" color="black" onClick={handleAdd}>
        <Flex align="center">
          <Text marginRight="2">Add Pet</Text>
          <BiMessageSquareAdd />
        </Flex>
      </Button>
      }
    {shouldRenderAccordion && 
      <Modal isOpen={isModalOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Pet Details</ModalHeader>
        <ModalBody>
          {/* Add your edit form or content here */}
          {/* For example, you can include input fields and submit button */}
          <Box>
            <Text>Edit Pet Form</Text>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text"  onChange={(e) => setName(e.target.value)} />
              <FormLabel>Age</FormLabel>
              <Input type="text"  onChange={(e) => setAge(e.target.value)} />
              <FormLabel>Image</FormLabel>
              <Input type="text"  onChange={(e) => setImage(e.target.value)} />
              <FormLabel>Gender</FormLabel>
              <Input
                type="text"
                
                onChange={(e) => setGender(e.target.value)}
              />
              <FormLabel>Location</FormLabel>
              <Input
                type="text"
                
                onChange={(e) => setLocation(e.target.value)}
              />
              <FormLabel>Breed</FormLabel>
              <Input type="text" onChange={(e) => setBreed(e.target.value)} />
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
              />
              <FormLabel>Color</FormLabel>
              <Input type="text"  onChange={(e) => setColor(e.target.value)} />
              <FormLabel>Type</FormLabel>
              <Input type="text"  onChange={(e) => setType(e.target.value)} />
              <FormLabel>Health</FormLabel>
              <Input
                type="text"
                
                onChange={(e) => setHealth(e.target.value)}
              />
              <FormLabel>Status</FormLabel>
              <Input
                type="text"
                onChange={(e) => setStatus(e.target.value)}
              />
              <FormLabel>Size</FormLabel>
              <Input
                type="text"
                onChange={(e) => setSize(e.target.value)}
              />
            </FormControl>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleClose}>
            Close
          </Button>
          <Button colorScheme="green" onClick={handleEdit}>
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    }

    </Box>
    </Box>
  );
};
