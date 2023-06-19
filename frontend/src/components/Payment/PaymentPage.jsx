import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  useToast,
} from "@chakra-ui/react";

let Price = localStorage.getItem("Value");
console.log(Price);
const PaymentsPage = () => {
  const toast = useToast()
  const [days, setDays] = useState(1);
  return (
    <Box
      height={"auto"}
      boxShadow={
        "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;"
      }
      margin={"auto"}
      width={"50%"}
      p={8}
    >
      <Heading mb={4}>Payment Information</Heading>
      <Box>
        <Input
          placeholder="Enter Days"
          onChange={(e) => setDays(e.target.value)}
        />
        <Heading>Your Total Amount is : ₹{days * Price}</Heading>
      </Box>
      <Box bg="white" p={8} borderRadius="md">
        <form>
          <Flex mb={4} direction={["column", "row"]}>
            <FormControl flex={1} mr={[0, 2]} mb={[4, 0]}>
              <FormLabel>Name on Card</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl flex={1} ml={[0, 2]}>
              <FormLabel>Card Number</FormLabel>
              <Input type="text" />
            </FormControl>
          </Flex>
          <Flex mb={4} direction={["column", "row"]}>
            <FormControl flex={1} mr={[0, 2]} mb={[4, 0]}>
              <FormLabel>Expiration Date</FormLabel>
              <Input type="date" />
            </FormControl>
            <FormControl flex={1} ml={[0, 2]}>
              <FormLabel>CVV</FormLabel>
              <Input type="text" />
            </FormControl>
          </Flex>
          <Flex mb={4}>
            <FormControl flex={1} mr={2}>
              <FormLabel>Address</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl flex={1} ml={2}>
              <FormLabel>City</FormLabel>
              <Input type="text" />
            </FormControl>
          </Flex>
          <Flex mb={4} direction={["column", "row"]}>
            <FormControl flex={1} mr={[0, 2]} mb={[4, 0]}>
              <FormLabel>State</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl flex={1} ml={[0, 2]}>
              <FormLabel>Postal Code</FormLabel>
              <Input type="text" />
            </FormControl>
          </Flex>
          <Flex mb={4}>
            <FormControl flex={1} mr={2}>
              <FormLabel>Payment Mode</FormLabel>
              <Select>
                <option>--- Select Payment Mode ---</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>PayPal</option>
              </Select>
            </FormControl>
          </Flex>
          <br />
          <br />
          <Flex justifyContent="center">
            <Button
              onClick={() =>
                toast({
                  title: "Successfull.....!",
                  description: "Booked a Shelter for your pet.",
                  status: "success",
                  duration: 9000,
                  disclosable: true,
                })
              }
              width={"100%"}
              colorScheme={"white"}
              backgroundColor="#6A00FF"
            >
              Submit
            </Button>
          </Flex>
        </form>
      </Box>
    </Box>
  );
};

export default PaymentsPage;

/*
// <Box
    //   height={"auto"}
    //   boxShadow={
    //     "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;"
    //   }
    //   margin={"auto"}
    //   width={"50%"}
    //   p={8}
    //   position={"relative"} // Added position relative to create a containing element for the absolute positioned image
    // >
      {/* <img
        src={
          "https://wallpapercave.com/wp/wp5857565.jpg"
        }
        alt={"Doberman"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.9, // Adjust the opacity value to make the image less prominent (0.0 to 1.0)
        }}
      /> 
*/
