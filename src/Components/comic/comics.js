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
} from "@chakra-ui/react";

const Comic = ({ cover, title }) => {
  return (
    <Flex flexDir={"column"} alignItems={"center"}>
      <Flex
        backgroundImage={`${cover}`}
        backgroundSize={"cover"}
        height={"300px"}
        width={"200px"}
      ></Flex>
      <Text mt={"10px"}>{title}</Text>
    </Flex>
  );
};

export default Comic;
