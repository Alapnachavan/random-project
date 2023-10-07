
// const Form = () => {
//     return( 

//             <div>
//                 <h1>Login</h1>
//                 <form>
//                 <input type="text" placeholder="Enter user Id"  ></input>
//                 <br />  <br />
//                 <input type="text" placeholder="Enter user Id"  ></input>
//                 <br />  <br />
//                 <input type="text" placeholder="Enter the User Password"></input> 
//                 <br />  <br />
//                 <button type="submit"  >Login</button>
//                 </form>
//             </div>         
//     )
// };

// export default Form;


import React from 'react';

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-box">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Enter user name" />
          <br /> <br />
          <input type="text" placeholder="Enter user id" />
          <br /> <br />
          <input type="text" placeholder="Enter the User Password" />
          <br /> <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
// import React from 'react';
// import { Paper, Typography, TextField, Button, Box } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   formContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//   },
//   formBox: {
//     padding: theme.spacing(3),
//     width: '300px',
//     boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
//   },
// }));

// const Form = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.formContainer}>
//       <Paper className={classes.formBox}>
//         <Typography variant="h5" component="h1" gutterBottom>
//           Login
//         </Typography>
//         <form>
//           <TextField
//             type="text"
//             label="Enter user Id"
//             fullWidth
//             margin="normal"
//             placeholder="Enter user Id"
//           />
//           <TextField
//             type="text"
//             label="Enter user Id"
//             fullWidth
//             margin="normal"
//             placeholder="Enter user Id"
//           />
//           <TextField
//             type="password"
//             label="Enter the User Password"
//             fullWidth
//             margin="normal"
//             placeholder="Enter the User Password"
//           />
//           <Button type="submit" variant="contained" color="primary" fullWidth>
//             Login
//           </Button>
//         </form>
//       </Paper>
//     </div>
//   );
// };

// export default Form;

