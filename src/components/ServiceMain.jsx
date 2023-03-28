import React from "react";
import CardMain from "./CardMain";
import Iphone from "./Iphone";

function ServiceMain(){
    
    return(
        <div>
            <div class="servicios">
            <div class="cards_servicios">
                <div class="card_servicios">
                    <h5>APLICACIONES A TU MEDIDA</h5>
                    <Iphone></Iphone>
                    <p>En nuestra empresa ofrecemos servicios de desarrollo de aplicaciones de alta calidad para asegurarnos de que nuestros clientes obtengan el producto final que están buscando. Trabajamos estrechamente con nuestros clientes para entender sus requisitos y necesidades, y utilizamos tecnologías y herramientas de vanguardia para garantizar que nuestras aplicaciones sean de alta calidad y cumplan con las expectativas de nuestros clientes.</p>
                    <button class="botonBlanco" onclick="location.href='/Aspa_Limited/Aspa_Limited/Menu.pdf'">SABER MAS</button>
                </div>  
            </div>
        </div>
        </div>
    )
}
export default ServiceMain