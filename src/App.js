import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CardList from './components/CardList';
import './App.css';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#3949ab',
    },
  },
});
const App = () => {
  return (
    <Router>

      <div className="App" style={{ backgroundColor: '#1E1F21', minHeight: '100vh' }}>
        <ThemeProvider theme={theme}>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/one-piece">
                One Piece Cards
              </Button>
              <Button color="inherit" component={Link} to="/fusion-world">
                Fusion World Cards
              </Button>
            </Toolbar>
          </AppBar>
        </ThemeProvider>

        <Container>
          <Routes>
            <Route path="/one-piece" element={<CardList cardType="One Piece" apiUrl="http://35.173.191.47:8000/api/one-piece/" />} />
            <Route path="/fusion-world" element={<CardList cardType="Fusion World" apiUrl="http://35.173.191.47:8000/api/fusion-world-cards/" />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

const Home = () => (
  <div style={{ color: 'white' }}>
    <h2>Welcome to the Bandai Card Database!</h2>
    <p>Select a game above to view cards.</p>
  </div>
);

export default App;
