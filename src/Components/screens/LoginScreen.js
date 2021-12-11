import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  //Effects

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      navigate("/");
    } catch (error) {
      setError("error signing in");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <Flex flexDir={"row"} height={"100%"}>
      <Flex width={"50%"} flexDir={"row"} justifyContent={"center"}>
        <Text color={"white"} fontSize={"50px"} textAlign={"center"}>
          WEBFLOW
        </Text>
      </Flex>
      <Flex
        width={"50%"}
        backgroundColor={"#FD1D1D"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <form onSubmit={loginHandler}>
          <Text fontSize={"40px"} color={"white"} padding={"20px"}>
            Login
          </Text>
          {error && <Text>{error}</Text>}
          <Flex flexDir={"column"} padding={"20px"}>
            <FormControl paddingY={"10px"}>
              <FormLabel color={"white"}>Email:</FormLabel>
              <Input
                type={"email"}
                placeholder="enter email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant={"outline"}
                _placeholder={{ color: "#131313" }}
                background={"white"}
                color={"black"}
              />
            </FormControl>

            <FormControl paddingY={"10px"}>
              <FormLabel color={"white"}>Password:</FormLabel>
              <Input
                type={"password"}
                required
                placeholder="enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant={"outline"}
                _placeholder={{ color: "#131313" }}
                background={"white"}
                color={"black"}
              />
            </FormControl>
            <Button
              type="submit"
              background={"#131313"}
              my={"20px"}
              color={"white"}
              _hover={{ background: "white", color: "black" }}
            >
              LOG IN
            </Button>
            <Text>
              Don't have an account?{" "}
              <Link to="/register">
                <span style={{ color: "black" }}>Register</span>
              </Link>
            </Text>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default LoginScreen;
