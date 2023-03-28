import React from "react";

function AboutUs() {

    return(
        <div class="sobreNosotros"> 
            <a name = "Nosotros"></a>
            <div class="titulos">
                <h3>SOBRE NOSOTROS</h3>
                <p>¿QUIENES SOMOS?</p> 
            </div>
            <div class="personal">
                <div class="persona">
                    <img src="\img\1650166774232.jpg" alt="Imagen_PM"></img>
                    <h5>Haik Martin Kilic Aslan</h5>
                    <p>Project Manajer</p>
                    <p>Experiencia: Responsable de desarrollo de proyectos</p>
                    <p>(Autocity)</p>
                </div>
                
                <div class="persona">
                    <img src="\img\1651492193397.jpg" alt="Imagen_SM"></img>
                    <h5>Pablo Agustin Gil</h5>
                    <p>Sales Manager</p>
                    <p>Experiencia: Administrador contable</p>
                    <p>(P&G Consultores)</p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutUs