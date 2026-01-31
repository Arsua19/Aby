let actual = 1;

function siguiente() {
  document.getElementById(`p${actual}`).classList.remove("activa");
  actual++;
  document.getElementById(`p${actual}`).classList.add("activa");
}

function verificarFecha() {
  const fecha = document.getElementById("fecha").value;
  const error = document.getElementById("error");

  if (fecha === "14/04/2017") {
    error.textContent = "";
    siguiente();
  } else {
    error.textContent = "Mmmmmm esa no es la fecha srta 😏";
  }
}
