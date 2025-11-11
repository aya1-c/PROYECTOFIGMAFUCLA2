// Seleccionamos el botón
const toggleBtn = document.getElementById("toggleDarkMode");

// Si localStorage recuerda que estaba activado…
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  if (toggleBtn) toggleBtn.textContent = "☀️";
}

// Si existe el botón (por si alguna página no lo tiene)
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Guardamos el estado en localStorage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      toggleBtn.textContent = "☀️";
    } else {
      localStorage.setItem("darkMode", "disabled");
      toggleBtn.textContent = "🌙";
    }
  });
}
