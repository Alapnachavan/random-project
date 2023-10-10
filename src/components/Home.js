

// import  React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const Cardinfo=()=>{
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="/static/images/cards/contemplative-reptile.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           INDIA..
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           India, country that occupies the greater part of South Asia. Its capital is New Delhi, built in the 20th century just south of the historic hub of Old Delhi to serve as India’s administrative centre. 
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
// export default Cardinfo ;

// import React, { useState, useEffect } from 'react';

// const Home = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Define the API endpoint URL
//     const apiUrl =
//       'https://api.themoviedb.org/3/movie/popular?api_key=305f60bfbc8d3750bac9f89b838c6b97';

//     // Fetch data from the API
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data.results); // Update the state with the fetched data
//         setLoading(false); // Set loading to false
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setLoading(false); // Set loading to false even on error
//       });
//   }, []); // The empty array [] as the second argument makes this effect run only once, like componentDidMount

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Popular Movies</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li> 
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl =
      'https://api.themoviedb.org/3/movie/popular?api_key=305f60bfbc8d3750bac9f89b838c6b97';

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results); // Update the state with the fetched data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false even on error
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="card-container">
        {data.map((movie) => (
          <Card key={movie.id} className="movie-card">
            <CardMedia
              component="img"
              height="300px"
              width={"100px"}
              alt={movie.title}
              image={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {movie.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {movie.overview}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
