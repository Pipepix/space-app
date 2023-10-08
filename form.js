
const form = document.getElementById("form")

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

function validarInputs() {

    const distancia = document.getElementById("input-distancia").value;
    const gravedad = document.getElementById("input-gravedad").value;
    const excentricidad = document.getElementById("input-exentricidad").value;

    console.log(`distancia ${distancia}, gravedad ${gravedad}, exentricidad ${excentricidad}`)
    if (distancia == "1" && gravedad == "1"  && excentricidad == "0" ) {
        location.href = "/pages/true_ending.html"
    } else {
        location.href = "/pages/bad1.html"
    }
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    validarInputs();

})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})