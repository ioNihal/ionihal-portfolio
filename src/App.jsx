import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import MainBody from './components/MainBody';  
import Dashboard from './components/Dashboard'; 
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
      <Routes>  
        
        <Route path="/" element={<MainBody />} /> 
        {/*<Route path="/dashboard" element={<Dashboard />} />*/} 
      </Routes>
    </Router>
  );
}

export default App;
