import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          margin: 0,
        }}
      >
        <Box
          sx={{
            backgroundColor: 'lightblue',
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh',
          }}
        >
          <h1>Top Column</h1>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'stretch',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'navy',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
              minHeight: '100px',
              flexGrow: 1,
            }}
          >
            <h2>Row 1</h2>
          </Box>
          <Box
            sx={{
              backgroundColor: 'blue',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
              minHeight: '100px',
              flexGrow: 1,
            }}
          >
            <h2>Row 2</h2>
          </Box>
          <Box
            sx={{
              backgroundColor: 'gray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
              minHeight: '100px',
              flexGrow: 1,
            }}
          >
            <h2>Row 3</h2>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
