import React from "react"
import { Link } from 'react-router-dom'

function Nav() {

    return (

        <div>
            <section class="top-nav">

            <div class="logo">
            <Link to="/"><img src="/img/aspaLogo.png" alt="logo"></img></Link>
            </div>

            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'></div>
            </label>

            <ul class="menu">
              <li><a><Link to="/">Inicio</Link></a></li>
              <li><a><Link to="/nosotros">Nosotros</Link></a></li>
              <li><a><Link to="/servicios">Servicios</Link></a></li>
              <li><Link to="/contactanos">Contactanos</Link></li>
            </ul>

          </section>
        </div>
        
        )
}
  
  export default Nav
  