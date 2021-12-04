import React from "react";
import ReactDom from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./config/theme";

import App from "./App";

ReactDom.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,

  document.getElementById("root")
);
