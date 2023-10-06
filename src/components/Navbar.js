
import React, { useState } from "react";
import { AppBar, Button, Grid, Tab, Tabs, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';

const Navbar = () => {
    const [value, setValue] = useState();

    return (
        <AppBar>
            <Toolbar>
                <Grid container 
                sx={{alignContent:"space-between",
                    }}
                >
                    
                    
                    <Grid item md={3}>
                        <Tabs
                            indicatorColor="secondary"
                            textColor="inherit" 
                            value={value}
                            onChange={(e, val) => setValue(val)}
                        >
                            <Tab label="Home" />
                            <Tab label="About" />
                            <Tab label="Form" />
                        </Tabs>
                        </Grid>
                        <Grid item md={8}>
                        <Box sx={{ marginLeft: 'auto' }}>
                            <Button variant="contained">
                                Login
                            </Button>
                            <Button sx={{ marginLeft: 1 }} variant="contained">
                                Signup
                            </Button>
                        </Box>
                        </Grid>
                    
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;

