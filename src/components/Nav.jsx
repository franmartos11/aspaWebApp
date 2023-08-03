import React from "react"
import { Link } from 'react-router-dom'

function Nav() {

    return (

        <div>
            <section class="top-nav">

            <div class="logo">
            <Link to="/"><img src="/img/aspaLogo.png" alt="logo aspa"></img></Link>
            </div>

            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'></div>
            </label>

            <ul class="menu">
              <li><Link to='/'>Inicio</Link></li>
              <li><Link to='nosotros'>Nosotros</Link></li>
              <li><Link to='servicios'>Servicios</Link></li>
              <li><Link to='contactanos'>Contactanos</Link></li>
            </ul>
            
          </section>
        </div>
        
        )
}
  
  export default Nav
  