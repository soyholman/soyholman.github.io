var word = [["Abraham Lincoln", " El Decimosexto Presidente De Estados Unidos Fue Asesinado Tras Reprimir La Secesión Del Sur En El Curso De Una Sangrienta Guerra Y Promover La Abolición De La Esclavitud"], ["Alejandro Magno", "Rey De Macedonia Cuyas Conquistas Y Extraordinarias Dotes Militares Le Permitieron Forjar, En Menos De Diez Años, Un Imperio Que Se Extendía Desde Grecia Y Egipto Hasta La India"], ["Cleopatra", "Hija, Madre Y Hermana De Reyes, Fue La Última Reina De Su Dinastía, La Ptolemaica, Y Con Su Muerte Se Cerró El Periodo Helenístico De Egipto,Es Una De Las Figuras Más Recordadas Del Antiguo Egipto!."], ["Darwin", "Era Un Naturalista Británico Que Propuso La Teoría De La Evolución Biológica Por Selección Natural."], ["Einstein", "El Científico Más Famoso Del Siglo XX Mantiene Su Carisma Y Su Legado Décadas Después De Su Muerte. Nacido Alemán, Nacionalizado Después Suizo Y Finalmente Estadounidense."], ["Hitler", "Fue Uno De Los Personajes Históricos Más Conflictivos Y Poderosos Del Siglo XX. Gobernó Alemania Durante El Conocido Como Tercer Reich"],["Cristobal Colon", "Fue Un Explorador Italiano Que Dirigió Viajes Al Caribe, América Central Y América Del Sur. Gracias A Él Se Allanó El Camino Para La Colonización Europea."],["Homero", "Fue Un Poeta De La Antigua Grecia Que Nació Y Vivió En El Siglo VIII A.C. Es Autor De Dos De Las Principales Obras De La Antigüedad: Los Poemas Épicos La Ilíada Y La Odisea."],["Jesucristo", "Es El Personaje Central De Los Evangelios Que Conforman La Biblia, Y El Personaje En Torno Al Cual Surgió La Religión Cristiana "],["Stephen Hawking", "fue Un Físico Y Divulgador Científico Británico (Nació El 8 De Enero De 1942 Y Murió El 14 De Marzo De 2018 A Los 76 Años) Conocido Principalmente Por: ● Ser El Primer Científico En Ofrecer Una Teoría Cosmológica Explicada Desde La Confluencia De La Teoría General De La Relatividad Y La Mecánica Cuántica."],["Van Gogh", "Fue Un Pintor Neerlandés, Uno De Los Principales Exponentes Del Postimpresionismo. Pintó Unos 900 Cuadros (Entre Ellos 43 Autorretratos Y 148 Acuarelas) Y Realizó Más De 1600 Dibujos.​"],["Cristiano Ronaldo", "es un futbolista portugués que juega como delantero en el Manchester United Football Club de la Premier League de Inglaterra y en la selección de Portugal, de la cual es su capitán y máximo goleador histórico."],["Messi","es un futbolista argentino que juega como delantero o centrocampista en el Paris Saint-Germain de la Ligue 1 de Francia. Es internacional con la selección de Argentina, equipo del que es capitán y máximo goleador histórico."],["Conor McGregor","es un peleador irlandés de artes marciales mixtas que actualmente compite en las categorías de peso ligero y peso wélter de Ultimate Fighting Championship."],["Mbappe","es un futbolista francés de ascendencia argelina y camerunesa que juega como delantero en el Paris Saint-Germain Football Club de la Ligue 1 de Francia."],["Harry Styles","es un cantante, compositor y actor británico. Inició su carrera como cantante en 2010 como integrante de la boy band One Direction, con la que participó en el programa The X Factor y quedó en tercer lugar."],["Travis Scott","es un cantante y rapero estadounidense. En 2018, su aclamado álbum Astroworld fue lanzado y llegó al Billboard Hot 100 con el single Sicko Mode. Actualmente, tiene 44.59 millones de oyentes al mes en esta plataforma musical."],["Post Malone","es un rapero y cantante estadunidense conocido por sus letras introspectivas. Sus géneros son muy variados e incluyen el country, el grunge, el rap y el R&B. Su último álbum, Hollywood’s Bleeding, fue lanzado en 2019 y tiene 44.70 millones de oyentes cada mes."],["The Weeknd","cantante canadiense, con 65.10 millones de oyentes, lanzó en marzo de este año su nuevo álbum, After Hours, y es responsable de una de las canciones más populares de 2020, “Blinding Lights”."],["Dua Lipa"," es una cantante y compositora inglesa, que trabajó como modelo hasta que firmó con Warner Music Group en 2015. Lanzó su primer álbum homónimo en 2017. En Spotify, tiene 55.65 millones de oyentes mensuales."],["Ed Sheeran","El cantante inglés de 27 años es el artista más importante del género folk con 51.46 millones de oyentes al mes. Sus tres primeros álbumes fueron nombrados “+”, “x”, “-“, respectivamente, y su último álbum, lanzado en 2019, rompió la tendencia y fue llamado “No.6 Collaborations Project”. La canción que lo hizo realmente famoso fue “Shape of You”."],["Michael Jackson","fue un cantante, compositor, productor, bailarín, actor y empresario estadounidense. Conocido como el «rey del pop», sus contribuciones y reconocimiento en la historia de la música y el baile durante más de cuatro décadas, así como su publicitada vida personal"],["the beatles"," fue una banda de rock británica activa durante la década de 1960, y reconocida como la más exitosa comercialmente y la más alabada por la crítica en la historia de la música popular y de la música rock. Formada en Liverpool, estuvo constituida desde 1962"],["freddie mercury","fue un cantante, compositor, pianista, guitarrista, diseñador gráfico y músico británico de origen parsi e indio, conocido por haber sido miembro de la banda de rock Queen."]]

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



