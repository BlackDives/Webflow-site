import React from "react";
import ReactDom from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";

ReactDom.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,

  document.getElementById("root")
);
