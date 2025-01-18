import React from "react";
import { Box, Heading, Text, Badge } from "@chakra-ui/react";

const ProfileView = ({ profile }) => {
  return (
    <Box p="4" border="1px solid gray" borderRadius="md" bg="gray.50" maxWidth="400px" mx="auto">
      <Heading size="md">{profile.name}</Heading>
      <Text>Age: {profile.age}</Text>
      <Text>Bio: {profile.bio}</Text>
      <Text>
        Interests:{" "}
        {profile.interests.split(",").map((interest, index) => (
          <Badge key={index} mr="1" colorScheme="green">
            {interest.trim()}
          </Badge>
        ))}
      </Text>
    </Box>
  );
};

export default ProfileView;
