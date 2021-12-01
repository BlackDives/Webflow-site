import React from "react";
import ReactDom from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./config/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";

ReactDom.render(
  <ChakraProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ChakraProvider>,

  document.getElementById("root")
);
