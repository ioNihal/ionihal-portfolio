import { useState } from 'react'
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
    </>
  )
}

export default App
