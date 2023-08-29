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
import React, { useEffect, useState } from "react";
import { PhoneIcon } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const Sidebar = ({ page }) => {
  const [searchParma, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const initLocation = searchParma.getAll("location");
  let initialOrder = searchParma.get("order");
  
  const [location, setLocation] = useState(initLocation || []);

  const [order, setOrder] = useState(initialOrder || "");
  const [sortBy, setSortBy] = useState("price");
  

  useEffect(() => {
    const params = {
      location,
    };

    order && (params.order = order);
    sortBy && (params.sortBy = sortBy)

    // search && (serchparams.search = search);
    // location && (serchparams.location = location);
    // sortBy && (serchparams.sortBy = sortBy);
    // sortOrder && (serchparams.sortOrder = "");
    setSearchParams(params);
  }, [location, order,sortBy]);

  const handalCity = (e) => {
    const { value } = e.target;

    let newLocation = [...location];
    if (newLocation.includes(value)) {
      newLocation = newLocation.filter((el) => el !== value);
    } else {
      newLocation.push(value);
    }
    setLocation(newLocation);

    // let newcity = [...location];

    // if (newcity.includes(value)) {
    //   newcity = newcity.filter((el) => el !== value);
    // } else {
    //   newcity.push(value);
    // }
  };

  const handalsort = (e) => {
    const { value } = e.target;
    console.log(value, "value");
    setOrder(value);

    // console.log(e);
    // setSortOrder(e);
    console.log(order);
  };

  return (
    <Box height={"100vh"}>
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
        <Box
          style={{
            height: "auto",
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
              checked={location.includes("Mumbai")}
            >
              Mumbai
            </Checkbox>
            <Checkbox
              onChange={handalCity}
              value={"Pune"}
              size="sm"
              colorScheme="purple"
              checked={location.includes("Pune")}
            >
              Pune
            </Checkbox>
            <Checkbox
              onChange={handalCity}
              value={"Hyderabad"}
              size="sm"
              colorScheme="purple"
              checked={location.includes("Hyderabad")}
            >
              Hyderabad
            </Checkbox>
            <Checkbox
              onChange={handalCity}
              value={"Bangalore"}
              size="sm"
              colorScheme="purple"
              checked={location.includes("Bangalore")}
            >
              Bangalore
            </Checkbox>
            <Checkbox
              onChange={handalCity}
              value={"Delhi"}
              size="sm"
              colorScheme="purple"
              checked={location.includes("Delhi")}
            >
              Delhi
            </Checkbox>
            <Checkbox
              onChange={handalCity}
              value={"Lucknow"}
              size="sm"
              colorScheme="purple"
              checked={location.includes("Lucknow")}
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
            height: "auto",
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
            Sort By Price
          </Text>
          {/* <RadioGroup
            colorScheme="purple"
            onChange={handalsort}
          >
            <Stack direction="column">
              <Radio size="sm"  name = {"sortOrder"} value="">
                All
              </Radio>
              <Radio size="sm" name = {"sortOrder"} value={"asc"}>
                Ascending
              </Radio>
              <Radio size="sm"  name = {"sortOrder"} value={"desc"}>
                Descending
              </Radio>
            </Stack>
          </RadioGroup> */}
          <h3>Sort by Price</h3>
          <div onChange={handalsort}>
            <div>
              <input
                type="radio"
                name="order"
                value={"asc"}
                defaultChecked={order === "asc"}
              />
              <label>Ascending</label>
            </div>
            <div>
              <input
                type="radio"
                name="order"
                value={"desc"}
                defaultChecked={order === "desc"}
              />
              <label>Descending</label>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
