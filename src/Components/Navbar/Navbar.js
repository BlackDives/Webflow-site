import React from "react";
import { Link as RouteLink } from "react-router-dom";
import {
  Flex,
  Text,
  Button,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";

const Navbar = () => {
  const Links = [{ title: "Home" }, { title: "Comics" }, { title: "About" }];
  const hoverStyles = {
    linkText: { color: "#FC6045" },
    bottonHover: {
      background: "transparent",
      borderColor: "#FC6045",
    },
    buttonText: { color: "#FC6045" },
  };

  const user = null;

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
        {user ? (
          <Button
            background={"#131313"}
            border={"2px solid #FD1D1D"}
            _hover={hoverStyles.bottonHover}
          >
            <Text
              color={"#FD1D1D"}
              fontSize={"25px"}
              _hover={hoverStyles.buttonText}
            >
              Logout
            </Text>
          </Button>
        ) : (
          <Button
            background={"#131313"}
            border={"2px solid #FD1D1D"}
            _hover={hoverStyles.bottonHover}
            to={"/auth"}
          >
            <Text
              color={"#FD1D1D"}
              fontSize={"25px"}
              _hover={hoverStyles.buttonText}
            >
              Sign-In
            </Text>
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
