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
              <li><a href="/">Inicio</a></li>
              <li><a href="/nosotros">Nosotros</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="contactanos">Contactanos</a></li>
            </ul>

          </section>
        </div>
        
        )
}
  
  export default Nav
  