import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './backend/Admin'; 

import MainBody from './components/MainBody'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html, body {
  height: 100vh;
  width:100%;
  margin: 0;
  padding: 0;
}

#root {
  height: 100vh;
}
`
function App() {
  return (
    <>
      <GlobalStyle />
      <MainBody />
      <Router>
      <Routes>
        {/* Define the route to admin page */}
        <Route path="/backend/Admin" element={<Admin />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
