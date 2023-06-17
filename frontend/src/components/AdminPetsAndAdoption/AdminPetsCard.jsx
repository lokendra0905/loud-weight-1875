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
} from "@chakra-ui/react";
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { deletePetDetails, updatePetDetails } from "../../Redux/adminPetsReducer/action";

export const AdminPetsCard = ({ avatar, email, first_name,_id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newemail,setEmail] = useState('')
  const dispatch = useDispatch()
  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  
    const handleUpdate =  () => {
        const data = {
            email:newemail
        }
        dispatch(updatePetDetails(_id,data))
      }
      const handleDelete =  () => {
        
        dispatch(deletePetDetails(_id))
      }
  return (
    <GridItem>
      <Image src={avatar} w="100%" alt="image" />
      <Text>{first_name}</Text>
      <Text>{email}</Text>
      <Flex>
      <Button onClick={handleEdit}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
      </Flex>
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
                <Input type="text" />
                <FormLabel>Email</FormLabel>
                <Input type="email" onChange={(e)=>setEmail(e.target.value)}/>
                <FormLabel>Image</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClose}>
              Close
            </Button>
            <Button colorScheme="green" onClick={handleUpdate}>Save Changes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </GridItem>
  );
};
