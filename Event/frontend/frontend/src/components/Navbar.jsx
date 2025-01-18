import React from "react";
import { Flex, Heading, Button } from "@chakra-ui/react";

const Navbar = ({ onLogout }) => {
  return (
    <Flex justifyContent="space-between" p="4" bg="gray.800" color="white">
      <Heading size="lg">Event Connection Platform</Heading>
      <Button onClick={onLogout} colorScheme="red">
        Logout
      </Button>
    </Flex>
  );
};

export default Navbar;
