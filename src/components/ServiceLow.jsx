import React from "react";
import { useState } from "react";


function ServiceLow(){
    
    const [displayActual,setDisplayActual] = useState("backIpadWrapper");
    const [proyecto,setProyectoActual] = useState("https://www.appsheet.com/start/3965b1f3-539b-44d3-967e-aac16757009d");
    const [displayWidth,setWidthActual] = useState(688); 
    const [displayHeigth,setHeigthActual] = useState(375); 
    const [animation,setAnimation]= useState('')

    
    
    const iphoneDisplay =()=>{
        setDisplayActual("backphoneWrapper") 
        setWidthActual(256)
        setHeigthActual(470)
        setAnimation("slideInLeft")    
    }
    const ipadDisplay =()=>{
        setDisplayActual("backIpadWrapper")
        setWidthActual(688)
        setHeigthActual(375)
        setAnimation("zoomIn")  
    }
    const macBookDisplay =()=>{
        setDisplayActual("backMackBook")
        setWidthActual(617)
        setHeigthActual(386)
        setAnimation("slideInRight")
    }

    const proyectoDisplayLeads= ()=>{
        setProyectoActual("https://www.appsheet.com/start/3965b1f3-539b-44d3-967e-aac16757009d")
    }
    const proyectoDisplayAuditory= ()=>{
        setProyectoActual("https://www.appsheet.com/start/c227a95b-9a21-479a-ad0e-f6e7dcfc1d95")
    }
    const proyectoDisplayInventory= ()=>{
        setProyectoActual("https://www.appsheet.com/start/3abec06d-4e7c-4afa-8286-3c2fae4f2337")
    }
    
    return(
        <div class="containerServiceLow">
            <div class="containerSelect">
                <div class="containerProductTry">
                    <h3>Selecciona una Aplicacion</h3>
                    <div class="containerButtonsService">
                        <button class='botonAzul' onClick={proyectoDisplayLeads}>Leads</button>
                        <button class='botonAzul' onClick={proyectoDisplayAuditory}>Auditory</button>
                        <button class='botonAzul' onClick={proyectoDisplayInventory}>Inventory</button>
                    </div>
                </div>
                <div class="containerProductTry">
                    <h3>Selecciona un Dispositivo</h3>
                    <div class="containerButtonsService">
                        <button class='botonAzul' onClick={iphoneDisplay}>Telefono</button>
                        <button class='botonAzul' onClick={ipadDisplay}>Tablet</button>
                        <button class='botonAzul' onClick={macBookDisplay}>Computadora</button>
                    </div>
                </div>
            </div>
            
            <div class={animation}>
                <div class='containerIphone'>
                <div class={displayActual}>
                    <div class='backPhone'>
                        <iframe title='Dispositivo que muestra app seleccionada' src={proyecto} width={displayWidth} height={displayHeigth}></iframe>
                    </div>
                </div>
                </div>   
            </div>
              
        </div>
    )
}export default ServiceLow