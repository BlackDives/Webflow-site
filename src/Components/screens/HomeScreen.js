import React, { useState, useEffect } from "react";
import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  Button,
  Grid,
} from "@chakra-ui/react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link as RouteLink,
} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Comic from "../comic/comics";
import LandscapeCover from "../../assets/images/LandscapeCover.jpeg";
import ComicCover from "../../assets/images/ComicCover.jpg";

const HomeScreen = () => {
  const [fileName, setFileName] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("author", author);
    formData.append("content", fileName);

    axios.post("/api/comics", formData);
  };

  return (
    <Flex flexDir="column" background={"#131313"} width={"100%"}>
      <Flex width={"100%"}>
        <Flex
          height={"80vh"}
          width={"100%"}
          backgroundImage={`${LandscapeCover}`}
          bgRepeat={"no-repeat"}
          backgroundSize={"cover"}
          flexDir={"column"}
          justifyContent={"space-between"}
        >
          <Navbar />
          <Flex flexDir={"column"} ml={"50px"} mb={"50px"}>
            <Text
              color={"white"}
              fontSize={"60px"}
              fontWeight={800}
              textShadow={"2px 2px 3px #000"}
            >
              Comic Title
            </Text>
            <Text fontWeight={700} textShadow={"2px 2px 3px #000"}>
              This is a description of the comic that is displayed on the front
              page.
            </Text>
            <Flex>
              <Button
                backgroundColor={"#fd1d1d"}
                color={"white"}
                m={"10px"}
                fontWeight={700}
              >
                READ NOW
              </Button>
              <Button
                background={"transparent"}
                border={"2px solid"}
                borderColor={"#fd1d1d"}
                color={"white"}
                m={"10px"}
                fontWeight={700}
              >
                DETAILS
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDir={"column"} width={"100%"}>
        <Text fontSize={"50px"} color={"#fd1d1d"} textAlign={"center"}>
          Comics
        </Text>
        <Flex width={"100%"} justifyContent={"center"} alignItems={"center"}>
          <Grid templateColumns={"repeat(4, 1fr)"} gridGap={6} width={"50%"}>
            <RouteLink to="/comics/avengers">
              <Comic title={"The Avengers"} cover={ComicCover} />
            </RouteLink>
            <Comic title={"Placeholder"} />
            <Comic title={"Placeholder"} />
            <Comic title={"Placeholder"} />
            <Comic title={"Placeholder"} />
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeScreen;
