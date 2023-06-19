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
import { useNavigate, useParams } from "react-router-dom";

const PaymentsPage = () => {
  const navigate = useNavigate();
  const { amount } = useParams();
  const toast = useToast();
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
      <Heading mb={4} textAlign={"center"}>
        Payment Information
      </Heading>
      <Box>
        <Input
          placeholder="Enter Days"
          onChange={(e) => setDays(e.target.value)}
        />
        <Heading textAlign={"center"} mt={3}>
          Your Total Amount is : ₹{days ? days * amount : amount}
        </Heading>
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
              onClick={() => {
                toast({
                  title: "Success",
                  description: "Payment Successfull",
                  status: "success",
                  duration: 9000,
                  disclosable: true,
                });
                navigate("/");
              }}
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
