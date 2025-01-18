import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import ProfileForm from "./ProfileForm";
import Connections from "./Connections";

const Dashboard = ({ onProfileCreated }) => {
  return (
    <Box>
      <Grid templateColumns={["1fr", "1fr 1fr"]} gap="4">
        <ProfileForm onProfileCreated={onProfileCreated} />
        <Connections />
      </Grid>
    </Box>
  );
};

export default Dashboard;
