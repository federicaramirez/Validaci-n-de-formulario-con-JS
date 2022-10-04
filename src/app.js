/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => function {

    function envioDeFormulario(event) {
        event.preventDefault();
        let inputvalue = document.getElementById("inputcard");
        let amount = document.getElementById("inputamount");
        let firstname = document.getElementById("inputfirstname");
        let lastname = document.getElementById("inputlastname");
        let inputCity = document.getElementById("cityinput");
        let postalcode = document.getElementById("inputpostalcode");
        let select = document.getElementById("selectinput");
        let message = document.getElementById("cuadrotexto");
        let weaccept = document.getElementById("tarjetas");
        let alerta = document.getElementById("alertatodo");

        if (inputvalue.value == "") {
            alerta.display = "block";
        }
    }
    console.log(envioDeFormulario);
    document
        .getElementById("btnenviar")
        .addEventListener("click", envioDeFormulario);

}
// if (!inputvalue) {
//     inputvalue.required = true;
//     inputvalue.placeholder = alert;
// }