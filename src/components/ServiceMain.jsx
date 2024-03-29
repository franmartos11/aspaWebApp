import React from "react";
import Iphone from "./Iphone";

function ServiceMain(){
    function handleClick() {
        let url = 'https://drive.google.com/file/d/1rI9B36C977JEiUFRjcc6UE92dZ0tf_iq/view?usp=sharing';
        window.open(url,'_blank');
    }
    
    return(
        <div>
            <div class="servicios">
            <div class="cards_servicios">
                <div class="card_servicios">
                    <h5>APLICACIONES A TU MEDIDA</h5>
                    
                    <p>En nuestra empresa ofrecemos servicios de desarrollo de aplicaciones de alta calidad para asegurarnos de que nuestros clientes obtengan el producto final que están buscando. Trabajamos estrechamente con nuestros clientes para entender sus requisitos y necesidades, y utilizamos tecnologías y herramientas de vanguardia para garantizar que nuestras aplicaciones sean de alta calidad y cumplan con las expectativas de nuestros clientes.</p>
                    <Iphone></Iphone>
                    <button class="botonBlanco" onClick={handleClick}>SABER MAS</button>
                </div>  
            </div>
        </div>
        </div>
    )
}
export default ServiceMain