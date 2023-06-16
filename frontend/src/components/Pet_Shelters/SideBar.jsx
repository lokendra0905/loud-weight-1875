import {
  Box,
  Input,
  InputLeftElement,
  InputGroup,
  Stack,
  Radio,
  RadioGroup,
  Checkbox,
  Text,
} from "@chakra-ui/react";
//   import { SearchIcon } from "@chakra-ui/icons";
// import styled from '@emotion/styled'
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = ({ page }) => {
  const [searchParma, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  // const [role, Setrole] = useState("");
  const initLocation = searchParma.getAll("location");

  const [location, setLocation] = useState(initLocation || []);

  const [sort, setSort] = useState("");

  useEffect(() => {
    const serchparams = {};

    search && (serchparams.search = search);
    // role && (serchparams.role = role);
    location && (serchparams.location = location);
    sort && (serchparams.sort = sort);
    page && (serchparams.page = page);
    setSearchParams(serchparams);
  }, [search, location, sort, page]);

  // const handrole = (e) => {
  //     Setrole(e);
  // };

  const handalCity = (e) => {
    const { value } = e.target;

    let newcity = [...location];

    if (newcity.includes(value)) {
      newcity = newcity.filter((el) => el !== value);
    } else {
      newcity.push(value);
    }
    setLocation(newcity);
  };

  const handalsort = (e) => {
    setSort(e);
  };
  return (
    <Box>
      <Box
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
      >
        <InputGroup>
          <Input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Shelter"
            size="sm"
            padding={"10px"}
          />
        </InputGroup>
      </Box>

      <Box style={{ marginTop: "25px", width: "85%", margin: "25px auto" }}>
        {/* <Box
                    style={{
                        height: "15vh",
                        padding: "10px",
                        boxShadow:
                            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    }}
                >
                    <RadioGroup colorScheme="purple" onChange={handrole} value={role}>
                        <Stack direction="column">
                            <Radio size='sm' value="">All</Radio>
                            <Radio size='sm' value="Full-Time">Full-Time</Radio>
                            <Radio size='sm' value="Part-Time">Part-Time</Radio>
                        </Stack>
                    </RadioGroup> 
                </Box> */}

        {/* ////////////////////////// */}

        <Box
          style={{
            height: "44vh",
            padding: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <Text
            fontWeight={600}
            marginBottom={"5"}
            fontSize={"md"}
            color={"purple.700"}
          >
            Filter By City
          </Text>
          <br />
          <Stack spacing={[1, 5]} direction={["column"]}>
            <Checkbox
              onChange={handalCity}
              value={"Mumbai"}
              size="sm"
              colorScheme="purple"
              defaultChecked={location.includes("Mumbai")}
            >
              Mumbai
            </Checkbox>
            <Checkbox
              onChange={handalCity}
              value={"Pune"}
              size="sm"
              colorScheme="purple"
              defaultChecked={location.includes("Pune")}
            >
              Pune
            </Checkbox>
            <Checkbox
              onChange={handalCity}
              value={"Hyderabad"}
              size="sm"
              colorScheme="purple"
              defaultChecked={location.includes("Hyderabad")}
            >
              Hyderabad
            </Checkbox>
            <Checkbox
              onChange={handalCity}
              value={"Bangalore"}
              size="sm"
              colorScheme="purple"
              defaultChecked={location.includes("Bangalore")}
            >
              Bangalore
            </Checkbox>
            <Checkbox
              onChange={handalCity}
              value={"Delhi"}
              size="sm"
              colorScheme="purple"
              defaultChecked={location.includes("Delhi")}
            >
              Delhi
            </Checkbox>
            <Checkbox
              onChange={handalCity}
              value={"Lucknow"}
              size="sm"
              colorScheme="purple"
              defaultChecked={location.includes("Lucknow")}
            >
              Lucknow
            </Checkbox>
          </Stack>
          <br />
        </Box>
        <br />
        <br />

        <Box
          style={{
            height: "20vh",
            padding: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <Text
            fontWeight={600}
            marginBottom={"5"}
            fontSize={"md"}
            color={"purple.700"}
          >
            Sort By Rating
          </Text>
          <RadioGroup colorScheme="purple" onChange={handalsort} value={sort}>
            <Stack direction="column">
              <Radio size="sm" value="">
                All
              </Radio>
              <Radio size="sm" value="asc">
                Ascending
              </Radio>
              <Radio size="sm" value="desc">
                Descending
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
