import React from "react";
import ServiceTop from "../components/ServiceTop";
import ServiceMain from "../components/ServiceMain";
import Iphone from "../components/Iphone"
import ServiceLow from "../components/ServiceLow";


const ServicesPages = () =>{

    return(
        <div>
            <ServiceTop></ServiceTop>
            <ServiceLow></ServiceLow>
            <ServiceMain></ServiceMain>
            
        </div>
    )
}

export default ServicesPages