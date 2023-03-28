import React from "react";

function Form() {

    return (
        <div class="form">
            <a name = "contactenos"></a>
            <div class="upForm">
                <h3>¿TENES UN PROYECTO?</h3>
                <p>Completa este formulario y al instante te enviamos una propuesta a tu medida. ¡NOS CONECTEMOS!</p>
            </div>
            <div>
                <form action="https://formsubmit.co/menajes.aspa@gmail.com" method="POST">
                    <input type="text" name="name" placeholder="Nombre y Apellido: " required></input>
                    <input type="email" name="email" placeholder="Email: " required></input>
                    <input type="number" name="telefono" placeholder="Nro de Telefono: " required></input>
                    <input type="text" name="propuesta" placeholder="Mensaje:" required></input>
                    <button class="botonAzul" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
    
}

export default Form