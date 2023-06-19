import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deletePetDetails,
  getAllPets,
  updatePetDetails,
} from "../../Redux/adminPetsReducer/action";
import axios from "axios";

export const AdminPetsCard = ({
  image,
  name,
  _id,
  price,
  status,
  handleRefresh,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
  const handleEdit = () => {
    axios.get(`https://real-pink-donkey-coat.cyclic.app/pets`).then((res)=>{
      let item =  res.data.data.find(element => 
        element._id == _id
      )
      setName(item.name)  
      setImage(item.image) 
      setAge(item.age) 
      setGender(item.gender) 
      setLocation(item.location) 
      setBreed(item.breed) 
      setSize(item.size) 
      setColor(item.color) 
      setType(item.type) 
      setPrice(item.price)
      setStatus(item.status) 
      setHealth(item.health)
    })
    .catch((err)=>{
        console.log(err);
    })
    setIsModalOpen(true);
  };

  const handleClose = () => {
    handleRefresh()
    setIsModalOpen(false);
  };
  
  const handleUpdate = () => {
    const data = {
      name: petName,
      image: petImage,
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
    console.log("id",_id);
    dispatch(updatePetDetails(_id, data));

    toast({
      position: "top",
      title: `Pet details updated`,
      status: "success",
      duration: 1000,
      isClosable: true,
    });
    handleRefresh();
  };
  const handleDelete = () => {
    dispatch(deletePetDetails(_id));
    toast({
      position: "top",
      title: `Pet details deleted`,
      status: "success",
      duration: 1000,
      isClosable: true,
    });
    handleRefresh();
    setIsDeleteModalOpen(false);
    
  };
  const handleOpenDeleteModal = ()=>{
    setIsDeleteModalOpen(true);
  }

  return (
    <GridItem boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" p={5} rounded={10}>
      <Image
        src={image[0]}
        w="100%"
        h={{ base: "250px", md: "350px", lg: "250px" }}
        alt="image"
      />
      <Text mt={3}>Name: {name}</Text>
      <Text color={status === "Available" ? "green" : "red"}>{status}</Text>
      <Text>Price: {`₹${price}`}</Text>
      <Flex justifyContent="space-around" mt={5}>
        <Button onClick={handleEdit}>Edit</Button>
        <Button onClick={handleOpenDeleteModal}>Delete</Button>
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
                <Input type="text" value={petName} onChange={(e) => setName(e.target.value)} />
                <FormLabel>Age</FormLabel>
                <Input type="text" value={petage} onChange={(e) => setAge(e.target.value)} />
                <FormLabel>Image</FormLabel>
                <Input type="text" value={petImage} onChange={(e) => setImage(e.target.value)} />
                <FormLabel>Gender</FormLabel>
                <Input
                  type="text"
                  value={petgender}
                  onChange={(e) => setGender(e.target.value)}
                />
                <FormLabel>Location</FormLabel>
                <Input
                  type="text"
                  value={petlocation}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <FormLabel>Breed</FormLabel>
                <Input type="text" value={petbreed} onChange={(e) => setBreed(e.target.value)} />
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  value={petPrice}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <FormLabel>Color</FormLabel>
                <Input type="text" value={petcolor} onChange={(e) => setColor(e.target.value)} />
                <FormLabel>Type</FormLabel>
                <Input type="text" value={pettype} onChange={(e) => setType(e.target.value)} />
                <FormLabel>Health</FormLabel>
                <Input
                  type="text"
                  value={pethealth}
                  onChange={(e) => setHealth(e.target.value)}
                />
                <FormLabel>Status</FormLabel>
                <Input
                  type="text"
                  value={petStatus}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClose}>
              Close
            </Button>
            <Button colorScheme="green" onClick={handleUpdate}>
              Save Changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Flex>
      <Modal isOpen={isDeleteModalOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Pet Details</ModalHeader>
          <ModalBody>
            {/* Add your edit form or content here */}
            {/* For example, you can include input fields and submit button */}
            <Box>
              <Text>Are you sure you want to delete this item?</Text>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={handleDelete}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </GridItem>
  );
};
