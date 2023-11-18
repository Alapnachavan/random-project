
import React, { useState } from "react";
import { AppBar, Button, Grid, Tab, Tabs, Toolbar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: " #2E5A88" }}>
      <Toolbar>
        <img
          src="movie12.avif"
          alt="Logo"
          width="120"
          height="50"
          // style={{ backgroundColor: "blue" }}
          style={{ backgroundColor: "grey" }}
        />
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item md={3}>
            <Tabs value={tabValue} onChange={handleChange}>
              <Tab label={<Link to="/" style={{ color: "white" }}>Home</Link>} />
              <Tab label={<Link to="/About" style={{ color: "white" }}>About</Link>} />
              <Tab label={<Link to="/form" style={{ color: "white" }}>Form</Link>} />
              <Tab label={<Link to="/visit" style={{ color: "white" }}>Visit</Link>} />
            </Tabs>
          </Grid>
          <Grid item md={8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div style={{ flexGrow: 1 }} /> {/* To push the search input to the right */}
        <div style={{ position: 'relative' }}>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search..."
            style={{ marginLeft: 5, color: 'inherit' }}
          />
        </div>
              <Button variant="contained">
                <Link to="/login" style={{ color: "white" }}>Login</Link>
              </Button>
              <Button sx={{ marginLeft: 1 }} variant="contained">
                <Link to="/signup" style={{ color: "white" }}>Search</Link>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
