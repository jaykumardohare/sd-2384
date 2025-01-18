import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ProfileView from "./components/ProfileView";

const App = () => {
  const [profile, setProfile] = useState(null);

  const handleProfileCreated = (newProfile) => {
    setProfile(newProfile);
  };

  const handleLogout = () => {
    setProfile(null);
  };

  return (
    <Box>
      <Navbar onLogout={handleLogout} />
      {profile ? <ProfileView profile={profile} /> : <Dashboard onProfileCreated={handleProfileCreated} />}
    </Box>
  );
};

export default App;
