import React from "react"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./Routes/Home"
import {Routes, Route} from "react-router-dom";
import ServicesPages from "./Routes/ServicesPages";
import Us from "./Routes/Us";
import ContactUs from "./Routes/ContactUs";

function App() {

  return (
    <div class="app">
      
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/servicios" element={<ServicesPages/>}></Route>
          <Route path="/nosotros" element={<Us/>}></Route>
          <Route path="/contactanos" element={<ContactUs/>}></Route>
        </Routes>
        <Footer></Footer>
      
    </div>
    
  )  
}

export default App
