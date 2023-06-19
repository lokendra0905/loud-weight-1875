import React, { useEffect, useState } from "react";
import { Progress, SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import ShelterCard from "./ShelterCard";
import { useDispatch, useSelector } from "react-redux";
import { getShelterData } from "../../Redux/shelterReducer/action";
import { useLocation, useSearchParams } from "react-router-dom";

const ShelterList = () => {
  // const [hosteldata, setHostelData] = useState([]);

  // const getData = async () => {
  //   try {
  //     // setLoading(true)

  //     let res = await fetch(
  //       `https://real-pink-donkey-coat.cyclic.app/shelters`
  //     );
  //     let resData = await res.json();
  //     console.log(resData.data);
  //     setHostelData(resData.data);
  //   } catch (error) {
  //     console.log(error);
  //     // setError(true);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  const [searchParams] = useSearchParams();
  const data = useSelector((store) => store.shelterReducer.shelterData);
  const isLoading = useSelector((store) => store.shelterReducer.isLoading);

  const location = useLocation();

  const dispatch = useDispatch();

  const paramObj = {
    params: {
      search: searchParams.get("search"),
      location: searchParams.get("location"),
      sortBy: searchParams.get("price"),
      sortOrder: searchParams.get(""),
    },
  };
  // console.log(paramObj);
  console.log(data);

  useEffect(() => {
    dispatch(getShelterData(paramObj));
  }, [location.key]);

  // console.log(data.data, "hiiii");
  var Data = data.data;
  // console.log(isLoading);

  return isLoading ? (
    <Box>
      <Progress size="xs" isIndeterminate />
      <br />
      <br />
      <br />
      <Progress size="xs" isIndeterminate />
      <br />
      <br />
      <br />

      <Progress size="xs" isIndeterminate />
    </Box>
  ) : (
    <Box>
      <SimpleGrid
        style={{ margin: "auto" }}
        columns={{ sm: 2, md: 3, lg: 4, base: 1 }}
        spacing="15px"
      >
        {Data?.map((item) => {
          return <ShelterCard key={item.id} {...item} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default ShelterList;
