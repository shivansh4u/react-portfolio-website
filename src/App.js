import React, { useEffect } from "react";
import Card from "./components/Card";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function App() {
  return (
  

    <div className="min-h-screen py-16 px-3 bg-gray-100 ">

      <Card/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
      


    </div>

  );
}

export default App;
