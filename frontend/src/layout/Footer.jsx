import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import PhonefooterList from "./PhonefooterList";
// import {BiLogoPinterestAlt} from 'react-icons/bi'

export const Footer = () => {
  return (
    <>
      <Box w={"100%"} display={{ base: "none", lg: "block" }}>
        <Box
          bg={"#6504b5"}
          w={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          pt={"50px"}
        >
          <Box w={"95%"}>
            <Box
              bg={"transparent"}
              color={"white"}
              fontSize={"2xl"}
              ml={"10px"}
            >
              <Text fontFamily="Lucida Handwriting">Pet Connect</Text>
            </Box>

            <Box w={"100%"} display={"flex"} mt={"30px"} gap={8}>
              <UnorderedList
                listStyleType={"none"}
                color={"white"}
                fontSize={"sm"}
                spacing={1.1}
              >
                <Text fontWeight={"bold"} fontSize={"15px"} mb={"10px"}>
                  RESOURCE
                </Text>
                <ListItem>FAQs</ListItem>
                <ListItem>Mobille App Download</ListItem>
                <ListItem>Partnerships</ListItem>
                <ListItem>News Center</ListItem>
                <ListItem>Put Petfinder On Your Site</ListItem>
                <ListItem>For Developers</ListItem>
                <ListItem>Contact Us</ListItem>
              </UnorderedList>

              <UnorderedList
                listStyleType={"none"}
                color={"white"}
                fontSize={"sm"}
                spacing={1.1}
              >
                <Text fontWeight={"bold"} fontSize={"15px"} mb={"10px"}>
                  ADOPED OR GET INVOLVED
                </Text>
                <ListItem>All Adopt or Get Involved</ListItem>
                <ListItem>Adopting Pets</ListItem>
                <ListItem>Animal Shelters & Rescues</ListItem>
                <ListItem>Other Types of Pets</ListItem>
              </UnorderedList>

              <UnorderedList
                listStyleType={"none"}
                color={"white"}
                fontSize={"sm"}
                spacing={1.1}
              >
                <Text fontWeight={"bold"} fontSize={"15px"} mb={"10px"}>
                  ABOUT DOGS AND PUPIS
                </Text>
                <ListItem>All About Dogs & Puppies</ListItem>
                <ListItem>Dog Adoption</ListItem>
                <ListItem>Dog Breeds</ListItem>
                <ListItem>Feeding Your Dog</ListItem>
                <ListItem>Dog Behavior</ListItem>
                <ListItem>Dog Health & Wellness</ListItem>
                <ListItem>Dog Training</ListItem>
                <ListItem>Other Dog Information</ListItem>
              </UnorderedList>

              <UnorderedList
                listStyleType={"none"}
                color={"white"}
                fontSize={"sm"}
                spacing={1.1}
              >
                <Text fontWeight={"bold"} fontSize={"15px"} mb={"10px"}>
                  ABOUT CATS AND KITTENS
                </Text>
                <ListItem>All About Cats & Kittens</ListItem>
                <ListItem>Cat Adoptiond</ListItem>
                <ListItem>Cat Breeds</ListItem>
                <ListItem>Feeding Your Cat</ListItem>
                <ListItem>Cat Behavior</ListItem>
                <ListItem>Cat Health & Wellness</ListItem>
                <ListItem>Cat Training</ListItem>
                <ListItem>Other Cat Information</ListItem>
              </UnorderedList>

              <Box
                w={"350px"}
                h={"180px"}
                p={"15px"}
                bg={"#eeeeee"}
                borderRadius={"15px"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text color={"#6504b5"}>
                  To get the lastest on pet adoption and pet care, sign up for
                  the Petfinder newsletter.
                </Text>

                <Box
                  mt={"30px"}
                  bg={"#6504b5"}
                  borderRadius={"30px"}
                  color={"white"}
                  fontWeight={"bold"}
                  w={"150px"}
                  h={"50px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Text>SIGN UP</Text>
                </Box>
              </Box>
            </Box>
          </Box>

          <p
            style={{
              color: "white",
              fontSize: "small",
              marginTop: "50px",
              wordSpacing: "4px",
            }}
          >
            Shelter & Rescue Registration <span>|</span> Sitemap <span>|</span>{" "}
            Terms of Service <span>|</span>Notice at Collection <span>|</span>{" "}
            Privacy Policy (updated) <span>|</span> About Our Ads <span>|</span>
            Do Not Sell Or Share My Personal Information
          </p>

          <Box
            w={"100%"}
            mt={"60px"}
            height={"70px"}
            bg={"#2a0061"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            color={"white"}
          >
            <Text ml={"45px"} fontSize={"sm"}>
              ©2023 Petfinder.com All trademarks are owned by Société des
              Produits Nestlé S.A., or used with permission.{" "}
            </Text>

            <Box
              display={"flex"}
              mr={"45px"}
              alignItems={"center"}
              gap={7}
              fontSize={25}
              justifyContent={"center"}
            >
              <FaFacebookF /> <BsTwitter /> <BsInstagram /> <ImYoutube />{" "}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* footer for phone device */}

      <Box w={"100%"} display={{ base: "block", lg: "none" }}>
        <Box
          bg={"#6504b5"}
          w={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          pt={"20px"}
          pb={"30px"}
        >
          <Text
            textAlign={"center"}
            color={"white"}
            fontSize={"2xl"}
            fontFamily="Lucida Handwriting"
          >
            Pet Connect
          </Text>

          <Box
            w={"85%"}
            h={"180px"}
            mb={"50px"}
            p={"15px"}
            bg={"#eeeeee"}
            borderRadius={"15px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text color={"#6504b5"}>
              To get the lastest on pet adoption and pet care, sign up for the
              Petfinder newsletter.
            </Text>

            <Box
              mt={"30px"}
              bg={"#6504b5"}
              borderRadius={"30px"}
              color={"white"}
              fontWeight={"bold"}
              w={"150px"}
              h={"50px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text>SIGN UP</Text>
            </Box>
          </Box>

          <PhonefooterList
            title={"RESOURCE"}
            h={"180px"}
            data={[
              { name: "FAQ" },
              { name: "Mobile App Download" },
              { name: "Partnerships" },
              { name: "News Center" },
              { name: "Put Petfinder On Your Site" },
              { name: "For Developers" },
              { name: "Contact Us" },
            ]}
          />

          <PhonefooterList
            title={"ADOPT OR GET INVOLVED"}
            h={"180px"}
            data={[
              { name: "FAQ" },
              { name: "Mobile App Download" },
              { name: "Partnerships" },
              { name: "News Center" },
              { name: "Put Petfinder On Your Site" },
              { name: "For Developers" },
              { name: "Contact Us" },
            ]}
          />

          <PhonefooterList
            title={"ABOUT DOGS & PUPPIES"}
            h={"180px"}
            data={[
              { name: "FAQ" },
              { name: "Mobile App Download" },
              { name: "Partnerships" },
              { name: "News Center" },
              { name: "Put Petfinder On Your Site" },
              { name: "For Developers" },
              { name: "Contact Us" },
            ]}
          />

          <PhonefooterList
            title={"ABOUT CATS & KITTENS"}
            h={"180px"}
            data={[
              { name: "FAQ" },
              { name: "Mobile App Download" },
              { name: "Partnerships" },
              { name: "News Center" },
              { name: "Put Petfinder On Your Site" },
              { name: "For Developers" },
              { name: "Contact Us" },
            ]}
          />

          <p
            style={{
              color: "white",
              fontSize: "small",
              marginTop: "50px",
              wordSpacing: "4px",
              textAlign: "center",
              width: "80%",
            }}
          >
            Shelter & Rescue Registration <span>|</span> Sitemap <span>|</span>{" "}
            Terms of Service <span>|</span>Notice at Collection <span>|</span>{" "}
            Privacy Policy (updated) <span>|</span> About Our Ads <span>|</span>
            Do Not Sell Or Share My Personal Information
          </p>
        </Box>
        <Box pt={"15px"} bg="#2a0061" w={"100%"} pb={"15px"}>
          <Box
            display={"flex"}
            mb={"20px"}
            w={"100%"}
            alignItems={"center"}
            gap={9}
            fontSize={25}
            justifyContent={"center"}
            color={"white"}
          >
            <FaFacebookF /> <BsTwitter /> <BsInstagram /> <ImYoutube />{" "}
          </Box>
          <Text
            color={"white"}
            ml={"45px"}
            fontSize={"sm"}
            textAlign={"center"}
          >
            ©2023 Petfinder.com All trademarks are owned by Société des Produits
            Nestlé S.A., or used with permission.{" "}
          </Text>
        </Box>
      </Box>
    </>
  );
};
