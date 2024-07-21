import { ThemeProvider, CssBaseline } from '@mui/material';
import React from 'react';
import darkTheme from './theme/DarkTheme';
import Routers from './Routers';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
