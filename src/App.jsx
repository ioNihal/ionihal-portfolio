import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated import for v6
import MainBody from './components/MainBody';  // Main body for the homepage
import Dashboard from './Dashboard';  // Admin dashboard page
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

#root {
  height: 100vh;
}
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>  {/* Use Routes instead of Switch */}
        {/* Define routes */}
        <Route path="/" element={<MainBody />} />  {/* Main Body of the app */}
        <Route path="/dashboard" element={<Dashboard />} />  {/* Admin Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
