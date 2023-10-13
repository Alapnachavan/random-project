

import React, { useState } from "react";
import { AppBar, Button, Grid, Tab, Tabs, Toolbar,Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [tabValue, setTabValue] = useState(0); // Initialize tabValue with the index of the default selected tab

  const handleChange = (event, newValue) => {
    setTabValue(newValue); // Update tabValue when a tab is clicked
  };

  return (
    <AppBar>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item md={3}>
            <Tabs value={tabValue} onChange={handleChange}>
              <Tab label={<Link to="/">Home</Link>} />
              <Tab label={<Link to="/About">About</Link>} />
              <Tab label={<Link to="/form">Form</Link>} />
            </Tabs>
          </Grid>
          <Grid item md={8}>
            <Box sx={{ marginLeft: "auto" }}>
              <Button variant="contained">
                <Link to="/login">visit</Link>
              </Button>
              <Button sx={{ marginLeft: 1 }} variant="contained">
                <Link to="/signup">search</Link>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;