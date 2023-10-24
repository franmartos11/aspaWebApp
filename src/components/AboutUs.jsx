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
                    <img src="\img\1650166774232.webp" alt="Imagen_PM"></img>
                    <h5>Haik Martin Kilic Aslan</h5>
                    <p>Project Manager</p>
                    <p>Responsable de desarrollo de proyectos</p>
                </div>
                
                <div class="persona">
                    <img src="\img\franM.png" alt="Imagen_SM"></img>
                    <h5>Francisco Martos</h5>
                    <p>Arquitecto de Software</p>
                    <p>Responsable de diseñar la estructura y la organización de sistemas de software</p>
                </div>
            </div>
            <div class="personal">
                <div class="persona">
                    <img src="\img\agusL.jpeg" alt="Imagen_SM"></img>
                    <h5>Agustin Luque</h5>
                    <p>Encargado Comercial</p>
                    <p>Responsable de la gestion comercial y adquisicion de clientes</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs