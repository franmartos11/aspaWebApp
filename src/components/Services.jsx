import React from "react";


function Services(){
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
                    <button class="botonBlanco" onclick="location.href='/Aspa_Limited/Aspa_Limited/Menu.pdf'">SABER MAS</button>
                </div>
                
                <div class="card_servicios">
                    <img src="\img\pexels-george-milton-7014599 (1).jpg" alt=""></img>
                    <h5>APLICACIONES PERSONALIZADAS</h5>
                    <p>Desarrollamos la aplicación que necesites, con los mejores tiempos de entrega.</p>
                    <button class="botonBlanco" onclick="location.href='/Aspa_Limited/Aspa_Limited/Menu.pdf'">SABER MAS</button>
                </div>  
            </div>
            
        </div>
    )
}

export default Services