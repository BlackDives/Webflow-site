import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from "./Components/routing/PrivateRoute";
import Navbar from "./Components/Navbar/Navbar";

//Screens
import PrivateScreen from "./Components/screens/PrivateScreen";
import LoginScreen from "./Components/screens/LoginScreen";
import RegisterScreen from "./Components/screens/RegisterScreen";
import HomeScreen from "./Components/screens/HomeScreen";

const App = () => {
  return (
    <Router>
      <Flex
        background={"#131313"}
        flexDir={"column"}
        className="app"
        height={"100vh"}
      >
        {/* <Navbar /> */}
        <Switch>
          {/* <PrivateRoute path="/" component={PrivateScreen} /> */}
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/" element={<HomeScreen />}></Route>
          {/* <Route path="/forgotpassword" component={LoginScreen} />
          <Route path="/passwordreset/:resettoken" component={LoginScreen} /> */}
        </Switch>
      </Flex>
    </Router>
  );
};

export default App;
