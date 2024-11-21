
// Ayuda a que la pagina y/o funcion no se reinicie 
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtiene los valores del correo y la contraseña de los elementos ingresados previamente
  const email = document.getElementById("correo").value;
  const password = document.getElementById("Contraseña").value;
  // Obtiene el usuario almacenado en localStorage del correo ingresado
  const storedUser = localStorage.getItem(email);
  // Verificar si se encontro un usuario almacenado con el correo ingresado
  if (storedUser) {
    const usuario = JSON.parse(storedUser);
    console.log(usuario);
    // Verificar si la contraseña ingresada coincide con la contraseña ingresada
    if (usuario.password === password) {
      localStorage.setItem("currentUser", usuario.nombre);
      window.location.href = "./inicio.html";
    } else {
      alert("Contraseña incorrecta.");
    }
  } else {
    alert("Usuario no encontrado.");
  }
});
