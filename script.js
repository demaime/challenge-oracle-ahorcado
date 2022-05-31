const palabrasDisponibles = [
  "ARBOL",
  "ARCO",
  "AMENAZA",
  "ANTENA",
  "ASTILLA",
  "ANIMAL",
  "ABEDUL",
  "ABEJA",
  "BARCO",
  "BOINA",
  "BANANA",
  "BARITONO",
  "BUFANDA",
  "BRAZO",
  "BARRER",
  "BEBIDA",
  "CRESTA",
  "CASTOR",
  "CISTERNA",
  "CALABAZA",
  "CORREO",
  "CHISTE",
  "CARTON",
  "CUEVA",
  "DORADO",
  "DUENDE",
  "DISTINTO",
  "DOBLE",
  "DARSENA",
  "DORSO",
  "DRAMA",
  "DELFIN",
  "ELEFANTE",
  "ESMALTE",
  "ESFERA",
  "ESPEJO",
  "EXTRAÑO",
  "EJEMPLO",
  "EJERCITO",
  "ESQUEMA",
  "FLOR",
  "FUERZA",
  "FIESTA",
  "FARSA",
  "FILTRO",
  "FAROL",
  "FRENAR",
  "FRENTE",
  "GALPON",
  "GORRA",
  "GUERRA",
  "GARGOLA",
  "GRIS",
  "GUSANO",
  "GINEBRA",
  "GALLETA",
  "HIELO",
  "HUEVO",
  "HERRERO",
  "HUMANO",
  "HERMANO",
  "HERVIR",
  "HACHA",
  "HABITAR",
  "ISLA",
  "INVIERNO",
  "INFIERNO",
  "IMAN",
  "ISOTOPO",
  "INGLES",
  "INTERNO",
  "IGUAL",
  "JUEGO",
  "JUNTAR",
  "JIRAFA",
  "JARRA",
  "JARABE",
  "JERINGA",
  "JOLGORIO",
  "JABALINA",
  "KIOSCO",
  "KINOTO",
  "KIWI",
  "KARAOKE",
  "KETCHUP",
  "KIMONO",
  "LETRA",
  "LAMPARA",
  "LECHUZA",
  "LUCHA",
  "LITIO",
  "LOMBRIZ",
  "LIBELULA",
  "LENTEJA",
  "LEGUMBRE",
  "MUSICA",
  "MANTEL",
  "MANDRIL",
  "MELODIA",
  "MISTERIO",
  "MANDATO",
  "MILONGA",
  "MILANESA",
  "NUTRIA",
  "NARIZ",
  "NISPERO",
  "NARANJA",
  "NOTA",
  "NIVEL",
  "NUEZ",
  "NOTICIA",
  "OCRE",
  "OVALO",
  "OCASO",
  "OSCILAR",
  "OSCURO",
  "OGRO",
  "OCHENTA",
  "PARAISO",
  "PASILLO",
  "PASTOR",
  "POMELO",
  "PAUTA",
  "PRISMA",
  "PERSONA",
  "PARAGUAS",
  "PIRAMIDE",
  "PRENSA",
  "QUESO",
  "QUINCE",
  "QUIETUD",
  "QUEMAR",
  "QUIMICA",
  "ROPERO",
  "RESCATE",
  "REMERA",
  "RIESGO",
  "RISCO",
  "RECORRER",
  "RECITAL",
  "RENTA",
  "SALTO",
  "SIESTA",
  "SANTO",
  "SARTEN",
  "SERVIR",
  "SUPLICIO",
  "SORTEO",
  "SENCILLO",
  "TAPIR",
  "TREPAR",
  "TAXI",
  "TETERA",
  "TAPON",
  "TEMPANO",
  "TIMBRE",
  "TARDE",
  "UNTAR",
  "URANIO",
  "UNIFORME",
  "URBANO",
  "UNION",
  "UNIRVERSO",
  "UTOPIA",
  "VECINO",
  "VELERO",
  "VILLANO",
  "VEJIGA",
  "VALIJA",
  "VIEJO",
  "VETERANO",
  "VERDAD",
  "VESTIGIO",
  "YEMA",
  "YERBA",
  "YELMO",
  "ZAPATO",
  "ZUMBIDO",
  "ZORRO",
  "ZANJA",
];
const contenedorPalabra = document.getElementById("palabra-a-adivinar");
const teclas = Array.from(document.querySelectorAll(".tecla"));
const horca = document.getElementById("horca");
const mensajeFinal = document.getElementById("mensaje-final");
const resultado = document.getElementById("resultado");
const finalizacion = document.getElementById("finalizacion");
const btnIniciarJuego = document.getElementById("juego-nuevo");
const btnVolverAJugar = document.getElementById("volver-a-jugar");

let palabraElegida;
let cantidadDeAciertos = 0;
let cantidadDeErrores = 0;

function iniciarJuego() {
  const palabraLocalStorage = localStorage.getItem("palabra");
  contenedorPalabra.innerHTML = "";
  horca.src = "./img/step0.png";
  aciertos = 0;
  errores = 0;
  palabraElegida = palabraLocalStorage || palabraRandom();

  for (let i = 0; i < palabraElegida.length; i++) {
    const span = document.createElement("span");
    span.classList.add("letra-o-guion");
    contenedorPalabra.appendChild(span);
  }

  teclas.forEach((tecla) => {
    tecla.disabled = false;
    tecla.classList.remove("fallo");
    tecla.classList.remove("acierto");
  });
}

function palabraRandom() {
  const cantidadPalabras = palabrasDisponibles.length;
  const valorRandom = Math.floor(Math.random() * cantidadPalabras);
  palabraElegida = palabrasDisponibles[valorRandom];
  console.log(palabraElegida); //eliminar esta linea al finalizar
  return palabraElegida;
}

function teclearLetra(e) {
  if (e.which < 65 || e.which > 90) return;
  else {
    const teclaSeleccionada = document.querySelector(
      `button[data-key="${e.which}"]`
    );
    const letraSeleccionada = teclaSeleccionada.innerHTML;
    apostarLetra(letraSeleccionada, teclaSeleccionada);
  }
}

function clickearLetra(e) {
  const teclaSeleccionada = e.target;
  const letraSeleccionada = teclaSeleccionada.innerHTML;
  teclaSeleccionada.disabled = true;
  apostarLetra(letraSeleccionada, teclaSeleccionada);
}

function apostarLetra(letraSeleccionada, teclaSeleccionada) {
  const letrasEnJuego = Array.from(document.querySelectorAll(".letra-o-guion"));
  let acierto = false;

  for (let i = 0; i < palabraElegida.length; i++) {
    if (letraSeleccionada === palabraElegida[i]) {
      letrasEnJuego[i].innerHTML = letraSeleccionada;
      cantidadDeAciertos++;
      acierto = true;
    }
  }

  if (acierto == false) {
    cantidadDeErrores++;
  }

  if (cantidadDeErrores > 6) {
    //condicion de derrota
    const container = document.getElementById("container-juego");
    container.style.opacity = 0.1;
    mensajeFinal.style.opacity = 1;
    mensajeFinal.style.height = "50%";
    mensajeFinal.style.backgroundColor = "lightcoral";
    resultado.innerHTML = "DERROTA! Intenta nuevamente";
    finalizacion.innerHTML = "La palabra era " + palabraElegida;
    horca.src = "./img/step7.png";
    teclas.forEach((tecla) => (tecla.disabled = true));
    localStorage.clear();
    return;
  } else if (cantidadDeAciertos === letrasEnJuego.length) {
    // condicion de victoria
    const container = document.getElementById("container-juego");
    container.style.opacity = 0.1;
    mensajeFinal.style.opacity = 1;
    mensajeFinal.style.height = "50%";
    mensajeFinal.style.backgroundColor = "mediumaquamarine";
    resultado.innerHTML = "VICTORIA! Lo lograste";
    finalizacion.innerHTML = "Adivinaste la palabra";
    teclas.forEach((tecla) => (tecla.disabled = true));
    localStorage.clear();
    return;
  }

  acierto
    ? teclaSeleccionada.classList.add("acierto")
    : teclaSeleccionada.classList.add("fallo");

  horca.src = `./img/step${cantidadDeErrores}.png`;

  console.table(cantidadDeAciertos, cantidadDeErrores); // eliminar esta linea al finalizar
}

teclas.forEach((tecla) => tecla.addEventListener("click", clickearLetra));
window.addEventListener("keydown", teclearLetra);
btnVolverAJugar.addEventListener("click", palabraRandom);
