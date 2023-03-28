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
                        <Link to="/contactanos" class="contact"><button class="botonAzul">TRABAJEMOS JUNTOS</button></Link>
                        <Link to="/servicios" class="contact"><button class="botonBlanco">CONOZCA MAS</button></Link>
                    </div>
                </div>
            </div>
        </div>
        
        
        )
}export default Main
  