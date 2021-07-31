let calcula = function(){

    const rendimiento = document.getElementById("rendimiento").value;
    const recorrido = document.getElementById("recorrido").value;
    const combustible = document.getElementById("combustible").value;

    const cantidad = recorrido / rendimiento;
    const resultado = cantidad * combustible;

    const span = document.querySelector("span")
    const output = document.querySelector("output")

    span.innerHTML = `Costo del viaje: $${Math.round(resultado)}`;
    output.innerHTML = `Cantidad de litros: ${Math.round(cantidad)} L`; 
  }