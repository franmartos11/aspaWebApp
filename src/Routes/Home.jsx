import React from "react";
import Main from "../components/Main.jsx";
import Reasons from "../components/Reasons";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Client from "../components/Client";
import Form from "../components/Form";

const Home = () => {
    return(
        <div>
            <Main></Main>
            <AboutUs></AboutUs>
            <Reasons></Reasons>
            <Services></Services>
            <Client></Client>
            <Form></Form>  
        </div>
        
    )

  }
  
  export default Home