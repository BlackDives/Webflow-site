import React from "react";
import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";
import AvengersFirst from "../../../src/assets/images/ComicPages/AvengersFirst.jpeg";
import AvengersSecond from "../../../src/assets/images/ComicPages/AvengersSecond.jpeg";
import AvengersThird from "../../../src/assets/images/ComicPages/AvengersThird.jpeg";

const Avengers = () => {
  return (
    <Flex flexDir={"column"} alignItems={"center"} background={"#131313"}>
      <Text fontSize={"50px"} color={"white"}>
        The Avengers
      </Text>
      <Flex flexDir={"column"} padding={"15px"}>
        <Image src={`${AvengersFirst}`} h={"800px"} m={5} />
        <Image src={`${AvengersSecond}`} h={"800px"} m={5} />
        <Image src={`${AvengersThird}`} h={"800px"} m={5} />
      </Flex>
    </Flex>
  );
};

export default Avengers;
