import React from "react";
import { Link, Route } from "react-router-dom";


function Services(){
    function handleClick() {
        let url = "https://drive.google.com/file/d/1rI9B36C977JEiUFRjcc6UE92dZ0tf_iq/view?usp=sharing";
        window.open(url,"_blank");
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

   
    
    
  return(
        <div class="servicios">
            <a name = "servicios"></a>
            <div class="titulos">
                <h3>SERVICIOS</h3>
                <p>APLICACIONES A TU MEDIDA</p> 
            </div>
            <div class="cards_servicios">
                <div class="card_servicios">
                <img src="\img\pexels-torsten-dettlaff-54284 (2).jpg" alt=""></img>
                    <h5>APLICACIONES</h5>
                    <p>Disponemos de aplicaciones desarrolladas para que implementes en tu empresa, adaptándolas a tus necesidades.</p>
                    <Link to="/servicios" className="botonBlanco" onClick={scrollToTop}>SABER MAS</Link>
                </div>
                
                <div class="card_servicios">
                    <img src="\img\pexels-george-milton-7014599 (1).jpg" alt=""></img>
                    <h5>APLICACIONES PERSONALIZADAS</h5>
                    <p>Desarrollamos la aplicación que necesites, con los mejores tiempos de entrega.</p>
                    <Link to="/servicios" className="botonBlanco" onClick={scrollToTop}>SABER MAS</Link>
                    
                </div>  
            </div>
            
        </div>
    )
}



export default Services