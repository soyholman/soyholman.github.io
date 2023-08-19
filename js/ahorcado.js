// Game configuration
var word = [
  ["Abraham Lincoln", "El Decimosexto Presidente De Estados Unidos..."],
  // ... (other word definitions)
  [
    "the beatles",
    "fue una banda de rock británica activa durante la década de 1960...",
  ],
  ["freddie mercury", "fue un cantante, compositor, pianista, guitarrista..."],
];

var tastatur = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var select = 0;
var wordLeft = [];
var fail = 0;

window.onload = function () {
  createKeyboard();
};

function startGame() {
  hideElement("home");
  hideElement("result");
  newGame();
}

function newGame() {
  clearKeyboard();
  clearPlayer();
  createWord();
}

function clearKeyboard() {
  var keys = document.getElementsByClassName("b");
  for (var i = 0; i < keys.length; i++) {
    keys[i].setAttribute("data", "");
  }
}

function clearPlayer() {
  fail = 0;
  wordLeft = [];
  for (var i = 0; i <= 6; i++) {
    gId("g" + i).setAttribute("data", "false");
    gId("g" + i).setAttribute("l", "false");
    gId("g" + i).setAttribute("r", "false");
  }
  hideElement("hintButton");
  hideElement("hint");
}

function createWord() {
  var min = 0;
  var max = word.length - 1;
  select = Math.floor(Math.random() * (max - min + 1)) + min;
  var letterContainer = gId("letter");
  letterContainer.innerHTML = "";
  var wordText = word[select][0];
  for (var i = 0; i < wordText.length; i++) {
    var letter = wordText[i].toUpperCase();
    var letterSpan = document.createElement("span");
    letterSpan.className = "l" + (letter === " " ? " ls" : "");
    letterSpan.innerHTML = "&nbsp;";
    letterSpan.id = "l" + i;
    letterContainer.appendChild(letterSpan);
    if (letter !== " " && wordLeft.indexOf(letter) === -1) {
      wordLeft.push(letter);
    }
  }
}

function createKeyboard() {
  var keyboardContainer = gId("tastatur");
  keyboardContainer.innerHTML = "";
  for (var i = 0; i < tastatur.length; i++) {
    var keySpan = document.createElement("span");
    keySpan.className = "b";
    keySpan.innerText = tastatur[i];
    keySpan.setAttribute("data", "");
    keySpan.onclick = function () {
      handleKeyPress(this);
    };
    keyboardContainer.appendChild(keySpan);
  }
}

function handleKeyPress(keyElement) {
  if (keyElement.getAttribute("data") === "") {
    var letter = keyElement.innerText;
    var exists = isLetterExist(letter);
    keyElement.setAttribute("data", exists);
    if (exists) {
      if (wordLeft.length === 0) {
        gameEnd(true);
      }
    } else {
      showNextFail();
    }
  }
}

function isLetterExist(letter) {
  var index = wordLeft.indexOf(letter);
  if (index !== -1) {
    wordLeft.splice(index, 1);
    typeLetter(letter);
    return true;
  }
  return false;
}

function showNextFail() {
  fail++;
  if (fail <= 10) {
    gId("g" + (fail - 1)).setAttribute("data", "true");
    if (fail === 4) {
      showElement("hintButton");
    }
    if (fail === 7 || fail === 8) {
      gId("g5").setAttribute("l", "true");
    }
    if (fail === 9) {
      gId("g6").setAttribute("l", "true");
    }
    if (fail === 10) {
      gId("g6").setAttribute("r", "true");
      gameEnd(false);
    }
  }
}

function typeLetter(letter) {
  for (var i = 0; i < word[select][0].length; i++) {
    if (word[select][0][i].toUpperCase() === letter) {
      gId("l" + i).innerText = letter;
    }
  }
}

function gameEnd(isWin) {
  var resultContainer = gId("result");
  resultContainer.setAttribute("data", isWin);
  if (isWin) {
    gId("rT").innerText = "¡Tú ganas!";
    gId("rM").innerHTML =
      "¡Felicidades, encontraste la palabra!<br/><br/>Buen trabajo!";
  } else {
    gId("rT").innerText = "¡Has perdido!";
    gId("rM").innerHTML =
      'La palabra era <br/><br/>"' +
      word[select][0].toUpperCase() +
      '"<br/><br/>Mejor suerte la próxima vez.';
  }
  showElement("result");
}

function hint() {
  gId("hintText").innerText = word[select][1];
  showElement("hint");
}

function hintExit() {
  hideElement("hint");
}

function gId(id) {
  return document.getElementById(id);
}

function showElement(id) {
  gId(id).style.display = "block";
}

function hideElement(id) {
  gId(id).style.display = "none";
}
