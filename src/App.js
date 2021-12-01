import React from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <Flex background={"#131313"} flexDir={"row"}>
      <Navbar />
    </Flex>
  );
};

export default App;
