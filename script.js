const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const edadInput = document.getElementById('edad');
const dniInput = document.getElementById('dni');
const emailInput = document.getElementById('email');
const agregarBtn = document.getElementById('agregar');
const tablaEntradas = document.getElementById('tabla-entradas');

function agregarEntrada() {
  const nombre = nombreInput.value;
  const apellido = apellidoInput.value;
  const edad = edadInput.value;
  const dni = dniInput.value;
  const email = emailInput.value;

  const fila = document.createElement('tr');
  const celdaNombre = document.createElement('td');
  const celdaApellido = document.createElement('td');
  const celdaEdad = document.createElement('td');
  const celdaDni = document.createElement('td');
  const celdaEmail = document.createElement('td');

  celdaNombre.textContent = nombre;
  celdaApellido.textContent = apellido;
  celdaEdad.textContent = edad;
  celdaDni.textContent = dni;
  celdaEmail.textContent = email;

  fila.appendChild(celdaNombre);
  fila.appendChild(celdaApellido);
  fila.appendChild(celdaEdad);
  fila.appendChild(celdaDni);
  fila.appendChild(celdaEmail);

  tablaEntradas.appendChild(fila);

  nombreInput.value = '';
  apellidoInput.value = '';
  edadInput.value = '';
  dniInput.value = '';
  emailInput.value = '';
}

agregarBtn.addEventListener('click', agregarEntrada);
