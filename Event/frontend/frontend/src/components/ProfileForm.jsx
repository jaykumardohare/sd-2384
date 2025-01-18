import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Button, Textarea } from "@chakra-ui/react";
import axios from "axios";

const ProfileForm = ({ onProfileCreated }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bio: "",
    interests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/profiles", formData);
      onProfileCreated(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box p="4" maxWidth="400px" mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl mb="4" isRequired>
          <FormLabel>Name</FormLabel>
          <Input name="name" value={formData.name} onChange={handleChange} />
        </FormControl>
        <FormControl mb="4" isRequired>
          <FormLabel>Age</FormLabel>
          <Input type="number" name="age" value={formData.age} onChange={handleChange} />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Bio</FormLabel>
          <Textarea name="bio" value={formData.bio} onChange={handleChange} />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Interests</FormLabel>
          <Input name="interests" value={formData.interests} onChange={handleChange} />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="100%">
          Create Profile
        </Button>
      </form>
    </Box>
  );
};

export default ProfileForm;
