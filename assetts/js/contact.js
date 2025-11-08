function validarFormulario(event) {
  event.preventDefault();

  // obtener elementos del formulario
  const form = document.getElementById('contacto-form');
  const email = document.getElementById('email');
  const telefono = document.getElementById('telefono');
  const mensaje = document.getElementById('mensaje');

  // contenedores de mensajes de error
  const errorEmail = document.getElementById('error-email');
  const errorTelefono = document.getElementById('error-telefono');
  const errorMensaje = document.getElementById('error-mensaje');

  // contenedor de resultado
  const resultContainer = document.getElementById('contact-result');

  // limpiar estados previos
  resultContainer.innerHTML = '';
  errorEmail.textContent = '';
  errorTelefono.textContent = '';
  errorMensaje.textContent = '';
  email.classList.remove('input-invalido');
  telefono.classList.remove('input-invalido');
  mensaje.classList.remove('input-invalido');

  let tieneErrores = false;

  const emailVal = (email.value || '').trim();
  const telefonoVal = (telefono.value || '').trim();
  const mensajeVal = (mensaje.value || '').trim();

  // validación email
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailVal) {
    tieneErrores = true;
    errorEmail.textContent = 'Por favor ingrese su correo electrónico.';
    email.classList.add('input-invalido');
  } else if (!emailRe.test(emailVal)) {
    tieneErrores = true;
    errorEmail.textContent = 'Formato inválido. Use ejemplo: nombre@dominio.com';
    email.classList.add('input-invalido');
  }

  // validación teléfono
  const telefonoDigits = telefonoVal.replace(/\D/g, '');
  const contieneLetras = /[A-Za-zÁÉÍÓÚáéíóúñÑ]/.test(telefonoVal);
  if (!telefonoVal) {
    tieneErrores = true;
    errorTelefono.textContent = 'Por favor ingrese su número de teléfono (puede incluir +, espacios o guiones).';
    telefono.classList.add('input-invalido');
  } else if (contieneLetras) {
    tieneErrores = true;
    errorTelefono.textContent = 'El número no debe contener letras. Use sólo números y símbolos como +, -, espacios.';
    telefono.classList.add('input-invalido');
  } else if (telefonoDigits.length < 7 || telefonoDigits.length > 15) {
    tieneErrores = true;
    errorTelefono.textContent = `El número ingresado tiene ${telefonoDigits.length} dígitos. Ingrese entre 7 y 15 dígitos (ej. +34123456789).`;
    telefono.classList.add('input-invalido');
  }

  // validación mensaje
  if (!mensajeVal) {
    tieneErrores = true;
    errorMensaje.textContent = 'Por favor escriba un mensaje breve (máx. 500 caracteres).';
    mensaje.classList.add('input-invalido');
  } else if (mensajeVal.length > 500) {
    tieneErrores = true;
    const exces = mensajeVal.length - 500;
    errorMensaje.textContent = `El mensaje supera el límite por ${exces} caracteres. Máximo 500.`;
    mensaje.classList.add('input-invalido');
  }
  if (tieneErrores) {
    return false;
  }

  // mostrar datos enviados usando createElement
  const titulo = document.createElement('h3');
  titulo.textContent = 'Datos enviados:';
  const lista = document.createElement('ul');

  const liEmail = document.createElement('li');
  liEmail.textContent = `Correo: ${emailVal}`;
  lista.appendChild(liEmail);

  const liTel = document.createElement('li');
  liTel.textContent = `Teléfono: ${telefonoVal}`;
  lista.appendChild(liTel);

  const liMsg = document.createElement('li');
  liMsg.textContent = `Mensaje: ${mensajeVal}`;
  lista.appendChild(liMsg);

  resultContainer.appendChild(titulo);
  resultContainer.appendChild(lista);

  form.reset();

  return false; // evita envío
}
