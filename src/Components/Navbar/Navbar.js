import React, { useState, useEffect } from "react";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import {
  Flex,
  Text,
  Button,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";

const Navbar = () => {
  const [isIn, setisIn] = useState(false);
  const navigate = useNavigate();

  const Links = [{ title: "Home" }, { title: "Comics" }, { title: "About" }];
  const hoverStyles = {
    linkText: { color: "#FC6045" },
    bottonHover: {
      background: "transparent",
      borderColor: "#FC6045",
    },
    buttonText: { color: "#FC6045" },
  };
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setisIn(true);
    }
  }, [isIn]);

  const removeToken = () => {
    localStorage.removeItem("authToken");
    setisIn(false);
  };

  return (
    <Flex
      height={"100px"}
      width={"100%"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Flex width={"70%"}>
        <UnorderedList display={"flex"} flexDir={"row"} listStyleType={"none"}>
          {Links.map((data) => (
            <ListItem padding={"10%"}>
              <Text
                color={"#FD1D1D"}
                fontSize={"22px"}
                _hover={hoverStyles.linkText}
              >
                {data.title}
              </Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
      <Flex width={"30%"} flexDir={"row"} justifyContent={"center"}>
        {isIn ? (
          <Button
            background={"transparent"}
            color={"#FD1D1D"}
            fontSize={"25px"}
            onClick={removeToken}
          >
            Log Out
          </Button>
        ) : (
          <RouteLink
            background={"#131313"}
            border={"2px solid #FD1D1D"}
            _hover={hoverStyles.bottonHover}
            to={"/login"}
          >
            <Text
              color={"#FD1D1D"}
              fontSize={"25px"}
              _hover={hoverStyles.buttonText}
            >
              Sign-In
            </Text>
          </RouteLink>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
