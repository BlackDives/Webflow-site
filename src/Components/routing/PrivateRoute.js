import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        localStorage.getItem(
          "authToken" ? <Component {...props} /> : <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
