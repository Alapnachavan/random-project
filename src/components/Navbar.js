// import React from "react";
// import {AppBar, Grid, Tab, Tabs, Toolbar} from '@mui/material';
// //import  ShoppingCartCheckoutIcon  from "@mui/icons-material";
// const Navbar =() =>{
//     return(
//         <AppBar>
//             <Toolbar>
//                 <Grid container> 
//                     <Grid item xs={2}> 
//                     </Grid>
//                         <Grid item xs={5}>
//                             <Tabs>
//                                 <Tab label="Home"/>
//                                 <Tab lable="About"/>
//                                 <Tab lable="Form"/>
//                             </Tabs>

//                         </Grid>

//                 </Grid>
//             </Toolbar>

//         </AppBar>
       
               
       
       
       
//     )
// }
// export default Navbar;

import React, { useState } from "react";
import { AppBar, Grid, Tab, Tabs, Toolbar } from '@mui/material';

const Navbar = () => {
    const [value,setvalue]=useState();
    return (
        <AppBar>
            <Toolbar>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={5}>
                        <Tabs indicatorColor="secondary"
                         textColor="inhert"
                         value={value} 
                         onChange={(e,val)=>setvalue(val)}
                         >
                            <Tab label="Home" />
                            <Tab label="About" />
                            <Tab label="Form" />
                        </Tabs>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
