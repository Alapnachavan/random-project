// import React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const rows = [
//   { id: 1, Moviename: 'jawan', Rating:"5 star", Realsedyear: '2023' },
//   { id: 2, Moviename: 'Jane Smith', Rating: "five star", Realsedyear: '20223' },
//   // Add more rows as needed
// ];
// const About = () => {
//   return (
//     <div>
//       <h1>movie name and info list</h1>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>id</TableCell>
//               <TableCell>MovienameName</TableCell>
//               <TableCell>Rating</TableCell>
//               <TableCell>Realsedyear</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell>{row.id2}</TableCell>
//                 <TableCell>{row.Moviename}</TableCell>
//                 <TableCell>{row.Rating}</TableCell>
//                 <TableCell>{row.Realsedyear}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default About;



import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const About = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl =
      'https://api.themoviedb.org/3/movie/popular?api_key=305f60bfbc8d3750bac9f89b838c6b97';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Movie Name and Info List</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Movie Name</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Released Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movieData.map((movie) => (
              <TableRow key={movie.id}>
                <TableCell>{movie.id}</TableCell>
                <TableCell>{movie.title}</TableCell>
                <TableCell>Rating Data (Not available)</TableCell>
                <TableCell>Released Year Data (Not available)</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default About;
