import React from 'react';
import { Typography } from '@material-ui/core';

function Home() {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Learning Resource Hub
      </Typography>
      <Typography variant="body1">
        Discover and share the best learning resources on the web.
      </Typography>
    </div>
  );
}

export default Home;
