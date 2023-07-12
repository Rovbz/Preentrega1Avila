// Array de palabras para adivinar
var palabras = ["gato", "perro", "elefante", "jirafa", "tigre"];

// Seleccionar una palabra aleatoria del array
var palabraObjetivo = palabras[Math.floor(Math.random() * palabras.length)];

// Crear un array para almacenar las letras adivinadas
var letrasAdivinadas = [];

// Inicializar el número de intentos disponibles
var intentosDisponibles = 6;

// Función para mostrar el progreso del juego
function mostrarProgreso() {
  var progreso = "";
  for (var i = 0; i < palabraObjetivo.length; i++) {
    if (letrasAdivinadas.includes(palabraObjetivo[i])) {
      progreso += palabraObjetivo[i] + " ";
    } else {
      progreso += "_ ";
    }
  }
  console.log("Progreso: " + progreso);
}

// Función para verificar si el jugador ha ganado
function haGanado() {
  for (var i = 0; i < palabraObjetivo.length; i++) {
    if (!letrasAdivinadas.includes(palabraObjetivo[i])) {
      return false;
    }
  }
  return true;
}

// Función principal del juego
function jugar() {
  mostrarProgreso();

  while (intentosDisponibles > 0) {
    // Solicitar al jugador que ingrese una letra
    var letraIngresada = prompt("Adivina una letra:");
    
    // Verificar si la letra ya ha sido adivinada
    if (letrasAdivinadas.includes(letraIngresada)) {
      alert("Ya has adivinado esa letra. Intenta con otra.");
      continue;
    }

    // Verificar si la letra está presente en la palabra objetivo
    if (palabraObjetivo.includes(letraIngresada)) {
      letrasAdivinadas.push(letraIngresada);
      if (haGanado()) {
        alert("¡Felicidades! Adivinaste la palabra: " + palabraObjetivo);
        break;
      } else {
        alert("¡Correcto! La letra está en la palabra.");
      }
    } else {
      intentosDisponibles--;
      alert("Incorrecto. Te quedan " + intentosDisponibles + " intentos.");
    }

    mostrarProgreso();
  }

  if (intentosDisponibles === 0) {
    alert("¡Se acabaron los intentos! La palabra era: " + palabraObjetivo);
  }
}

// Iniciar el juego
jugar();


  
  
  