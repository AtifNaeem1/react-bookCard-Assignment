import { Grid } from '@mui/material';
import {
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';
import React from 'react';

import './App.css';

import BookCard from './components/organisms/Cards/BookCard';
import customTheme from './theme/mainTheme';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customTheme}>
        <BookCard />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
