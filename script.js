const palabrasDisponibles = ["ARBOL", "ARCO", "AMENAZA", "ANTENA", "ASTILLA", "ANIMAL", "ABEDUL", "ABEJA", "BARCO", "BOINA", "BANANA", "BARITONO", "BUFANDA", "BRAZO", "BARRER", "BEBIDA", "CRESTA", "CASTOR", "CISTERNA", "CALABAZA", "CORREO", "CHISTE", "CARTON", "CUEVA", "DORADO", "DUENDE", "DISTINTO", "DOBLE", "DARSENA", "DORSO", "DRAMA", "DELFIN", "ELEFANTE", "ESMALTE", "ESFERA", "ESPEJO", "EXTRAÑO", "EJEMPLO", "EJERCITO", "ESQUEMA", "FLOR", "FUERZA", "FIESTA", "FARSA", "FILTRO", "FAROL", "FRENAR", "FRENTE", "GALPON", "GORRA", "GUERRA", "GARGOLA", "GRIS", "GUSANO", "GINEBRA", "GALLETA", "HIELO", "HUEVO", "HERRERO", "HUMANO", "HERMANO", "HERVIR", "HACHA", "HABITAR", "ISLA", "INVIERNO", "INFIERNO", "IMAN", "ISOTOPO", "INGLES", "INTERNO", "IGUAL", "JUEGO", "JUNTAR", "JIRAFA", "JARRA", "JARABE", "JERINGA", "JOLGORIO", "JABALINA", "KIOSCO", "KINOTO", "KIWI", "KARAOKE", "KETCHUP", "KIMONO", "LETRA", "LAMPARA", "LECHUZA", "LUCHA", "LITIO", "LOMBRIZ", "LIBELULA", "LENTEJA", "LEGUMBRE", "MUSICA", "MANTEL", "MANDRIL", "MELODIA", "MISTERIO", "MANDATO", "MILONGA", "MILANESA", "NUTRIA", "NARIZ", "NISPERO", "NARANJA", "NOTA", "NIVEL", "NUEZ", "NOTICIA", "OCRE", "OVALO", "OCASO", "OSCILAR", "OSCURO", "OGRO", "OCHENTA", "PARAISO", "PASILLO", "PASTOR", "POMELO", "PAUTA", "PRISMA", "PERSONA", "PARAGUAS", "PIRAMIDE", "PRENSA", "QUESO", "QUINCE", "QUIETUD", "QUEMAR", "QUIMICA", "ROPERO", "RESCATE", "REMERA", "RIESGO","RISCO", "RECORRER", "RECITAL", "RENTA", "SALTO", "SIESTA", "SANTO", "SARTEN", "SERVIR", "SUPLICIO", "SORTEO", "SENCILLO", "TAPIR", "TREPAR", "TAXI", "TETERA", "TAPON", "TEMPANO", "TIMBRE", "TARDE", "UNTAR", "URANIO", "UNIFORME", "URBANO", "UNION", "UNIRVERSO", "UTOPIA", "VECINO", "VELERO", "VILLANO", "VEJIGA", "VALIJA", "VIEJO", "VETERANO", "VERDAD", "VESTIGIO", "YEMA", "YERBA", "YELMO", "ZAPATO", "ZUMBIDO", "ZORRO", "ZANJA"];
const contenedorPalabra = document.getElementById("palabra-a-adivinar")
const btn = document.getElementById("btn")
const teclas = Array.from(document.querySelectorAll(".tecla"))
const horca = document.getElementById("horca")
let palabraElegida;
let cantidadDeAciertos = 0;
let cantidadDeErrores = 0;
const mensajeFinal = document.getElementById("mensaje-final")

function animarTecla(e) {
    if (e.keyCode < 65 || e.keyCode > 90) return; 
    else {
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    key.classList.add('letra-elegida');
    setTimeout(() => {key.classList.remove('letra-elegida')},100)
}}

function palabraRandom () {
  contenedorPalabra.innerHTML = "";
  horca.src = './img/step0.png'
  aciertos = 0;
  errores = 0;
  const cantidadPalabras = palabrasDisponibles.length;
  const valorRandom = Math.floor(Math.random() * cantidadPalabras);
  palabraElegida = palabrasDisponibles[valorRandom]

  for (let i=0; i < palabraElegida.length; i++){
    const span = document.createElement('span');
    span.classList.add("letra-o-guion")
    contenedorPalabra.appendChild(span)
  } 

  teclas.forEach(tecla => tecla.disabled = false)
  teclas.forEach(tecla => tecla.classList.remove("acierto"))
  teclas.forEach(tecla => tecla.classList.remove("fallo"))
  console.log(palabraElegida)
}



function seleccionarTecla (e) {
    const letrasEnJuego = Array.from(document.querySelectorAll(".letra-o-guion"))
    const teclaSeleccionada = e.target;
    const letraSeleccionada = teclaSeleccionada.innerHTML
    teclaSeleccionada.disabled = true;
    let acierto = false;

    for (let i = 0; i < palabraElegida.length; i++) {
        if (letraSeleccionada == palabraElegida[i]) {
            letrasEnJuego[i].innerHTML = letraSeleccionada
            cantidadDeAciertos++
            acierto = true;
        }
    }

    if (acierto == false) {
      cantidadDeErrores++
    }
    
    if (cantidadDeErrores === 6) {
      const container =  document.getElementById("container")
      container.style.opacity = 0.1;
      mensajeFinal.style.opacity = 1;
      mensajeFinal.style.height = "50%";
      mensajeFinal.innerHTML= "DERROTA! Intenta nuevamente"
      horca.src='./img/step0.png';
    }
    acierto ? teclaSeleccionada.classList.add("fallo") : teclaSeleccionada.classList.add("acierto")

    horca.src = `./img/step${cantidadDeErrores}.png`

    console.table(cantidadDeAciertos, cantidadDeErrores)
}

teclas.forEach(tecla => tecla.addEventListener("click", seleccionarTecla))
btn.addEventListener("click", palabraRandom)
window.addEventListener('keydown', animarTecla);