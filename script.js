const form = document.getElementById("clienteForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se envíe si hay errores
  let errores = [];

  const cedula = document.getElementById("cedula").value.trim();
  if (!/^[0-9]{10}$/.test(cedula)) {
    errores.push("La cédula debe tener exactamente 10 dígitos numéricos.");
  }

  const nombre = document.getElementById("nombre").value.trim();
  if (nombre.length < 3) {
    errores.push("El nombre debe tener al menos 3 caracteres.");
  }

  const apellido = document.getElementById("apellido").value.trim();
  if (apellido.length < 3) {
    errores.push("El apellido debe tener al menos 3 caracteres.");
  }
  
  const correo = document.getElementById("correo").value.trim();
  const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!patronCorreo.test(correo)) {
    errores.push("El correo no es válido.");
  }
  
  const telefono = document.getElementById("telefono").value.trim();
  if (!/^[0-9]{10}$/.test(telefono)) {
    errores.push("El teléfono debe tener 10 dígitos numéricos.");
  }

  if (errores.length > 0) {
    alert("Errores encontrados:\n- " + errores.join("\n- "));
  } else {
    alert("✅ Formulario válido. Datos listos para enviar.");
    form.reset();
  }
});
