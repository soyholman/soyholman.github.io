var word = [["Abraham Lincoln", " El Decimosexto Presidente De Estados Unidos Fue Asesinado Tras Reprimir La Secesión Del Sur En El Curso De Una Sangrienta Guerra Y Promover La Abolición De La Esclavitud"], ["Alejandro Magno", "Rey De Macedonia Cuyas Conquistas Y Extraordinarias Dotes Militares Le Permitieron Forjar, En Menos De Diez Años, Un Imperio Que Se Extendía Desde Grecia Y Egipto Hasta La India"], ["Cleopatra", "Hija, Madre Y Hermana De Reyes, Cleopatra Fue La Última Reina De Su Dinastía, La Ptolemaica, Y Con Su Muerte Se Cerró El Periodo Helenístico De Egipto,Es Una De Las Figuras Más Recordadas Del Antiguo Egipto!."], ["Darwin", "Era Un Naturalista Británico Que Propuso La Teoría De La Evolución Biológica Por Selección Natural."], ["Einstein", "El Científico Más Famoso Del Siglo XX Mantiene Su Carisma Y Su Legado Décadas Después De Su Muerte. Nacido Alemán, Nacionalizado Después Suizo Y Finalmente Estadounidense."], ["Hitler", "Fue Uno De Los Personajes Históricos Más Conflictivos Y Poderosos Del Siglo XX. Gobernó Alemania Durante El Conocido Como Tercer Reich"]]

// Game keyboard
var tastatur = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"

// Game memory
var select = 0
var wordLeft = []
var fail = 0

// Web-page onload
window.onload = function() {
    createTastur()
}

// Start game
function startGame() {
    gId("home").className = "h"
    gId("result").className = "h"
    
    newGame()
}

// New game
function newGame() {
    clearTastatur()
    clearPlayer()
    createWord()
}

// Clear keyboard
function clearTastatur() {
    var e = document.getElementsByClassName("b")
    for(a = 0; a < e.length; a++) {
        e[a].setAttribute("data", "")
    }
}

// Clear player
function clearPlayer() {
    fail = 0
    wordLeft = []
    gId("g0").setAttribute("data", "false")
    gId("g1").setAttribute("data", "false")
    gId("g2").setAttribute("data", "false")
    gId("g3").setAttribute("data", "false")
    gId("g4").setAttribute("data", "false")
    gId("g5").setAttribute("data", "false")
    gId("g5").setAttribute("r", "false")
    gId("g5").setAttribute("l", "false")
    gId("g6").setAttribute("data", "false")
    gId("g6").setAttribute("l", "false")
    gId("g6").setAttribute("r", "false")
    gId("hintButton").setAttribute("data", "false")
    gId("hint").style.display = "none"
}

// Get new word
function createWord() {
    var d = gId("letter")
    d.innerHTML = ""
    select = Math.floor(Math.random() * word.length)
    for(a = 0; a < word[select][0].length; a++) {
        var x = word[select][0][a].toUpperCase()
        var b = document.createElement("span")
        b.className = "l" + (x == " " ? " ls" : "")
        b.innerHTML = "&nbsp"
        b.id = "l" + a;
        d.appendChild(b)
        
        if(x != " ") {
            if(wordLeft.indexOf(x) == -1) {
                wordLeft.push(x)
            }
        }
    }
}

// Create keyboard
function createTastur() {
    var tas = gId("tastatur")
    tas.innerHTML = ""
    for(a = 0; a < tastatur.length; a++) {
        var b = document.createElement("span")
        b.className = "b"
        b.innerText = tastatur[a]
        b.setAttribute("data", "")
        b.onclick = function() {
            bTas(this)
        }
        tas.appendChild(b)
    }
}

// Game check, If show next error / game end
function bTas(a) {
    if(a.getAttribute("data") == "") {
        var x = isExist(a.innerText)
        a.setAttribute("data", x)
        if(x) {
            if(wordLeft.length == 0) {
                gameEnd(true)
            }
        } else {
            showNextFail()
        }
    }
}

// If letter "X" exist
function isExist(e) {
    var x = wordLeft.indexOf(e)
    if(x != -1) {
        wordLeft.splice(x, 1)
        typeWord(e)
        return true
    }
    return false
}

// Show next fail drawing
function showNextFail() {
    fail++
    switch(fail) {
        case 1:
            gId("g0").setAttribute("data", "true")
            break;
        
        case 2:
            gId("g1").setAttribute("data", "true")
            break;
        
        case 3:
            gId("g2").setAttribute("data", "true")
            break;
        
        case 4:
            gId("g3").setAttribute("data", "true")
            gId("hintButton").setAttribute("data", "true")
            break;
        
        case 5:
            gId("g4").setAttribute("data", "true")
            break;
        
        case 6:
            gId("g5").setAttribute("data", "true")
            break;
        
        case 7:
            gId("g5").setAttribute("l", "true")
            break;
        
        case 8:
            gId("g5").setAttribute("r", "true")
            break;
        
        case 9:
            gId("g6").setAttribute("data", "true")
            gId("g6").setAttribute("l", "true")
            break;
        
        case 10:
            gId("g6").setAttribute("r", "true")
            gameEnd(false)
            break;
    }
}

function typeWord(e) {
    for(a = 0; a < word[select][0].length; a++) {
        if(word[select][0][a].toUpperCase() == e) {
            gId("l" + a).innerText = e
        }
    }
}

// Game result
function gameEnd(e) {
    var d = gId("result")
    d.setAttribute("data", e)
    if(e) {
        gId("rT").innerText = "¡Tú ganas!"
        gId("rM").innerHTML = "¡Felicidades, encontraste la palabra!<br/><br/>Buen trabajo!"
    } else {
        gId("rT").innerText = "¡Has perdido!"
        gId("rM").innerHTML = "La palabra era <br/><br/>\"" + word[select][0].toUpperCase() + "\"<br/><br/>Mejor suerte la próxima vez."
    }
    d.className = ""
}

// Show hint
function hint() {
    gId("hintText").innerText = word[select][1]
    gId("hint").style.display = "block"
}

// Exit hint
function hintExit() {
    gId("hint").style.display = "none"
}

// Get HTML ID element by name
function gId(a) {
    return document.getElementById(a)
}



