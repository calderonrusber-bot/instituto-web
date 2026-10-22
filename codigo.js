const formulario = document.getElementById("formularioRegistro");
const mensaje = document.getElementById("mensaje");
const campoCarrera = document.getElementById("carrera");


document.getElementById("anio").textContent = new Date().getFullYear();


document.querySelectorAll(".elegir-carrera").forEach((boton) => {
  boton.addEventListener("click", () => {
    campoCarrera.value = boton.dataset.carrera;
    document.getElementById("registro").scrollIntoView({ behavior: "smooth" });
    campoCarrera.focus();
  });
});


formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  mensaje.className = "";
  mensaje.textContent = "";

  if (!formulario.checkValidity()) {
    formulario.reportValidity();
    mensaje.textContent = "Revisa los campos: completa la información correctamente.";
    mensaje.className = "error";
    return;
  }

  const datos = {
    nombre: document.getElementById("nombre").value.trim(),
    correo: document.getElementById("correo").value.trim(),
    telefono: document.getElementById("telefono").value.trim(),
    carrera: campoCarrera.value
  };


  console.log("Simulación de envío POST:", datos);

  mensaje.textContent = `¡Gracias, ${datos.nombre}! Tu solicitud para ${datos.carrera} fue registrada en esta demostración.`;
  mensaje.className = "exito";
  formulario.reset();
});