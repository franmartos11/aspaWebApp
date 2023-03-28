import React from "react"
import { Link } from 'react-router-dom'

function Main() {

    return (
        <div>
            <a name = "inicio"></a>
            <div class="principal">
                <div>
                    <div class="texto">
                        <h1>SOMOS UNA AGENCIA CREATIVA DIGITAL</h1>
                        <p>NOS ESPECIALIZAMOS EN SISTEMAS QUE FACILITEN Y ACELEREN DISTINTOS PROCESOS</p>
                    </div>
                    <div class="botones">
                        <button class="botonAzul"><Link to="/contactanos" class="contact" >TRABAJEMOS JUNTOS</Link></button>
                        <button class="botonBlanco"><Link to="/contactanos" class="contact2" >CONOZCA MAS</Link></button>
                    </div>
                </div>
            </div>
        </div>
        
        
        )
}export default Main
  