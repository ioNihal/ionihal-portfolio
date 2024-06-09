import React from "react"
import '../styles/MainBody.css'

import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import Works from "./Works"
import Contact from "./Contact"
import Footer from "./Footer"

function MainBody() {
  return (
    <div className="main-body">
      <Header />
      <Home />
      <About />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}

export default MainBody