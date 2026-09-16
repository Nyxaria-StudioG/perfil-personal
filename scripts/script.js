/*
    Efecto de pulsación.
    Funciona con mouse y pantalla táctil.
*/

document.querySelectorAll(".link-button").forEach(button => {

    button.addEventListener("pointerdown", () => {

        button.classList.add("pressed");

    });


    button.addEventListener("pointerup", () => {

        button.classList.remove("pressed");

    });


    button.addEventListener("pointerleave", () => {

        button.classList.remove("pressed");

    });


    button.addEventListener("pointercancel", () => {

        button.classList.remove("pressed");

    });

});