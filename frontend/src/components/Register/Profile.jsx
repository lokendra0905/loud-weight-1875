import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export const Profile = () => {
  return (
    <Box
      bg="#f9efef"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w="50%"
        m="auto"
        p={50}
        rounded={10}
        bg="white"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Text fontSize="20" fontWeight={500} ml={0}>
          Profile Details
        </Text>
        <SimpleGrid columns={2} spacing={5} mt={10}>
          <FormControl>
            {/*add readonly */}
            <FormLabel>First Name</FormLabel>
            <Input type="text" placeholder="Enter name" />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" placeholder="Enter last name" />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter email" />
          </FormControl>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <Select placeholder="Select gender">
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input type="text" placeholder="Enter city" />
          </FormControl>
          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input type="number" placeholder="Enter phone number" />
          </FormControl>
          <FormControl>
            <FormLabel>Profession</FormLabel>
            <Input type="text" placeholder="Enter profession" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter password" />
          </FormControl>
        </SimpleGrid>
        <Button mt={10} bg="#673ab7" color="white">
          Save
        </Button>
      </Box>
    </Box>
  );
};
