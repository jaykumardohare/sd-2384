import React, { useEffect, useState } from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import axios from "axios";

const Connections = () => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/connections");
        setConnections(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchConnections();
  }, []);

  const handleConnect = async (connectionId) => {
    try {
      await axios.post(`http://localhost:5000/api/connections/${connectionId}/accept`);
      setConnections(connections.map(conn => conn._id === connectionId ? { ...conn, status: "accepted" } : conn));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box p="4">
      <Heading size="md" mb="4">Connections</Heading>
      {connections.map((connection) => (
        <Box key={connection._id} p="4" border="1px solid gray" borderRadius="md" mb="2">
          <Text>{connection.name}</Text>
          <Button colorScheme="blue" onClick={() => handleConnect(connection._id)}>
            Accept Connection
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default Connections;
