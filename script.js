function animarTecla(e) {
    if (e.keyCode < 65 || e.keyCode > 90) return; 
    else {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add('letra-elegida');
    setTimeout(() => {key.classList.remove('letra-elegida')},100)
}}
window.addEventListener('keydown', animarTecla);

const palabrasDisponibles = ["arbol", "arco", "amenaza", "antena", "astilla", "animal", "abedul", "abeja", "barco", "boina", "banana", "baritono", "bufanda", "brazo", "barrer", "bebida", "cresta", "castor", "cisterna", "calabaza", "correo", "chiste", "carton", "cueva", "dorado", "duende", "distinto", "doble", "darsena", "dorso", "drama", "delfin", "elefante", "esmalte", "esfera", "espejo", "extraño", "ejemplo", "ejercito", "esquema", "flor", "fuerza", "fiesta", "farsa", "filtro", "farol", "frenar", "frente", "galpon", "gorra", "guerra", "gargola", "gris", "gusano", "ginebra", "galleta", "hielo", "huevo", "herrero", "humano", "hermano", "hervir", "hacha", "habitar", "isla", "invierno", "infierno", "iman", "isotopo", "ingles", "interno", "igual", "juego", "juntar", "jirafa", "jarra", "jarabe", "jeringa", "jolgorio", "jabalina", "kiosco", "kinoto", "kiwi", "karaoke", "ketchup", "kimono", "letra", "lampara", "lechuza", "lucha", "litio", "lombriz", "libelula", "lenteja", "legumbre", "musica", "mantel", "mandril", "melodia", "misterio", "mandato", "milonga", "milanesa", "nutria", "nariz", "nispero", "naranja", "nota", "nivel", "nuez", "noticia", "ocre", "ovalo", "ocaso", "oscilar", "oscuro", "ogro", "ochenta", "paraiso", "pasillo", "pastor", "pomelo", "pauta", "prisma", "persona", "paraguas", "piramide", "prensa", "queso", "quince", "quietud", "quemar", "quimica", "ropero", "rescate", "remera", "riesgo","risco", "recorrer", "recital", "renta", "salto", "siesta", "santo", "sarten", "servir", "suplicio", "sorteo", "sencillo", "tapir", "trepar", "taxi", "tetera", "tapon", "tempano", "timbre", "tarde", "untar", "uranio", "uniforme", "urbano", "union", "unirverso", "utopia", "vecino", "velero", "villano", "vejiga", "valija", "viejo", "veterano", "verdad", "vestigio", "yema", "yerba", "yelmo", "zapato", "zumbido", "zorro", "zanja"];

