
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl =
      'https://api.themoviedb.org/3/movie/popular?api_key=305f60bfbc8d3750bac9f89b838c6b97';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  const handleDelete = (movieId) => {
    // Filter the data array to exclude the movie with the specified ID
    const updatedData = data.filter((movie) => movie.id !== movieId);
    setData(updatedData);
  };

  const handleShare = (movieId) => {
    console.log(`Share movie with ID: ${movieId}`);
  };

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="card-container">
        <Grid container spacing={2}>
          {data.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <Card className="movie-card">
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
                  <div>
                    <IconButton
                      color="primary"
                      aria-label="Delete"
                      onClick={() => handleDelete(movie.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      aria-label="Share"
                      onClick={() => handleShare(movie.id)}
                    >
                      <ShareIcon />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
