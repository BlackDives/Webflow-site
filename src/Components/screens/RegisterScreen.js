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

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Effects
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);
  // End Effects

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        { username, email, password },
        config
      );

      console.log(`This is the data that was registered ${data}`);

      localStorage.setItem("authToken", data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Error Registering");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <Flex height={"100%"} flexDirection={"row"}>
      <Flex width={"50%"} flexDirection={"column"} alignItems={"center"}>
        <Text color={"white"} fontSize={"50px"}>
          WEBFLOW
        </Text>
      </Flex>
      <Flex
        width={"50%"}
        flexDirection={"column"}
        justifyContent={"center"}
        background={"#FD1D1D"}
      >
        <Text color={"white"} fontSize={"40px"} padding={"20px"}>
          Register
        </Text>
        <form onSubmit={registerHandler}>
          {error && <Text color={"red"}>{error}</Text>}
          <Flex flexDir={"column"} padding={"20px"}>
            <FormControl paddingY={"10px"}>
              <FormLabel>
                <Text color={"white"}>Username:</Text>
              </FormLabel>
              <Input
                type={"text"}
                placeholder="Enter username..."
                value={username}
                required
                background={"white"}
                onChange={(e) => setUsername(e.target.value)}
                color={"black"}
                variant={"outline"}
                _placeholder={{ color: "#131313" }}
              />
            </FormControl>

            <FormControl paddingY={"10px"}>
              <FormLabel>
                <Text color={"white"}>Email:</Text>
              </FormLabel>
              <Input
                type={"email"}
                placeholder="enter email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                color={"black"}
                background={"white"}
                variant={"outline"}
                _placeholder={{ color: "#131313" }}
              />
            </FormControl>

            <FormControl paddingY={"10px"}>
              <FormLabel>
                <Text color={"white"}>Password:</Text>
              </FormLabel>
              <Input
                type={"password"}
                required
                placeholder="enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                color={"black"}
                variant={"outline"}
                _placeholder={{ color: "#131313" }}
                background={"white"}
              />
            </FormControl>
            <Button
              type="submit"
              background={"#131313"}
              my={"20px"}
              color={"white"}
              _hover={{ background: "white", color: "black" }}
            >
              {/* <Text color={"white"}>Sign Up</Text> */}
              SIGN UP
            </Button>
            <Text>
              Already have an account?{" "}
              <Link to="/login">
                <Text
                  color={"white"}
                  display={"inline"}
                  _hover={{ color: "#9518FC" }}
                >
                  <span style={{ color: "black" }}>Login</span>
                </Text>
              </Link>
            </Text>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default RegisterScreen;
