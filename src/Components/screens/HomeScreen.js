import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const HomeScreen = () => {
  return (
    <Flex>
      <Navbar />
      <Text>Home</Text>
    </Flex>
  );
};

export default HomeScreen;
