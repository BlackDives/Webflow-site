import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex, Text, Button } from "@chakra-ui/react";

const PrivateScreen = ({ history }) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }

    const fetchPrivateData = async () => {
      const config = {
        header: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      try {
        const data = await axios.get(
          "http://localhost:4000/api/private",
          config
        );
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authItem");
        setError("You are not authorized, please login");
      }
    };
    fetchPrivateData();
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };

  return (
    <Flex>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <Flex>
          <Text>{privateData}</Text>
          <Button onClick={logoutHandler}>Logout</Button>
        </Flex>
      )}
    </Flex>
  );
};

export default PrivateScreen;
