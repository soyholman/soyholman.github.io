var QUESTIONS = [
  {
    question: "¿DE DÓNDE ES ESTA BANDERA?",
    answers: ["Hungría", "Italia", "Irlanda"],
    correctAnswer: "Hungría",
    image:
      "https://viajes.nationalgeographic.com.es/medio/2017/01/27/bandera-hungria_acc351c3.jpg",
    text: "La bandera de Hungría está compuesta por tres franjas horizontales de color rojo, blanco y verde. Se diferencia de la de Italia porque, en el país de la pasta y la pizza, sus franjas están dispuestas en vertical.",
  },
  {
    question: "¿QUÉ PAÍS TIENE ESTA SILUETA?",
    answers: ["Estados Unidos", "Nueva Zelanda", "Australia"],
    correctAnswer: "Australia",
    text: "Australia ocupa la masa continental llamada antiguamente Sahul. Tiene una extensión de más de 7,5 millones de kilómetros cuadrados, lo que le convierte en el sexto país más grande del mundo detrás de Rusia, Canadá, Estados Unidos, China y Brasil.",
    image:
      "https://viajes.nationalgeographic.com.es/medio/2017/01/30/australia_7ad8c360.png",
  },
  {
    question: "¿EN QUÉ PAÍS SE ENCUENTRAN ESTAS CURIOSAS FORMACIONES?",
    answers: ["China", "Filipinas", "Laos"],
    correctAnswer: "Filipinas",
    text: "La imagen corresponde a las Chocolate Hills (colinas de chocolate), en Bohol, Filipinas. Su nombre se debe a que las más de mil colinas cambian de color según las estaciones del año. Durante los meses de lluvia lucen de un verde intenso, mientras que en la época seca se vuelven marrones. Sus vistas desde lo alto hace que parezcan bombones de chocolate. Están declaradas Patrimonio de la Humanidad.",

    image:
      "https://viajes.nationalgeographic.com.es/medio/2016/01/04/80f86126chocolate_hills.jpg",
  },
  {
    question: "ESTA BANDERA PERTENECE A...",
    answers: ["Noruega", "Islandia", "Suecia"],
    correctAnswer: "Islandia",
    text: "La bandera de Islandia se diferencia del resto de los países nórdicos en que su fondo es de color azul con la cruz escandinava roja con bordes blancos.",
    image:
      "https://viajes.nationalgeographic.com.es/medio/2017/01/30/islandia_11f8d998.jpg",
  },
  {
    question: "¿EN QUÉ PAÍS SE ENCUENTRA ESTE MONUMENTO?",
    answers: ["Camboya", "Vietnam", "Nepal"],
    correctAnswer: "Camboya",
    text: "Angkor Wat es el templo hunduista más importante del recinto arqueológico de Angkor, en Siem Riep, Camboya. Fue la antigua capital del Imperio jemer, que sirvió como centro político y religioso durante su época de esplendor, entre los siglos IX y XV. Angkor Wat se ha convertido en el símbolo del país y su imagen está incluso presente en su bandera.",
    image:
      "https://viajes.nationalgeographic.com.es/medio/2017/01/30/angkor-wat_79293692.jpg",
  },
  {
    question: "¿CUÁL ES ESTE PAÍS EUROPEO?",
    answers: ["Croacia", "Serbia", "Eslovenia"],
    correctAnswer: "Croacia",
    text: "La silueta de la imagen pertenece a Croacia. El país situado a orillas del mar Adriático que colinda con Hungría, Eslovenia, Serbia, Montenegro y Bosnia-Herzegovina.",
    image:
      "https://viajes.nationalgeographic.com.es/medio/2017/02/01/croacia_bd145f60.JPG",
  },
  {
    question: "¿DE DÓNDE ES ESTA BANDERA?",
    answers: ["Venezuela", "Ecuador", "Colombia"],
    correctAnswer: "Ecuador",
    text: "Las banderas de estos tres países América latina cuentan con los colores amarillo, azul y roja. La de la foto corresponde a Ecuador y se diferencia de las otras dos porque en el centro luce el escudo del país.",
    image:
      "https://viajes.nationalgeographic.com.es/medio/2017/01/30/ecuador_92036201.jpg",
  },
  {
    question: "MINSK ES LA CAPITAL DE...",
    answers: ["Serbia", "Ucrania", "Bielorrusia"],
    correctAnswer: "Bielorrusia",
    text: "Minsk es la capital y la ciudad más grande de Bielorrusia. En 1919 esta región pasó a ser una república constituyente de la URSS como la República Socialista Soviética de Bielorrusia. En 1991 logró su independencia.",
    image:
      "https://viajes.nationalgeographic.com.es/medio/2017/01/30/minsk_2bcebcf1.jpg",
  },
  {
    question: "¿QUÉ PAÍS SE ENCUENTRA COMPLETAMENTE RODEADO POR SENEGAL?",
    answers: ["Guinea-Bisáu", "Gambia", "Togo"],
    correctAnswer: "Gambia",
    text: "Gambia se encuentra rodeada en su totalidad por Senegal, excepto en la desembocadura de homónimo río que muere en el Atlántico. Su frontera fue delimitada por los colonos británicos y actualmente es el país más pequeño de todo el continente africano.",
    image:
      "https://viajes.nationalgeographic.com.es/medio/2017/01/30/gambia_d3ee9a30.jpg",
  },
  {
    question: "¿A QUÉ PAÍS PERTENECE ESTA BANDERA?",
    answers: ["Kiribati", "Madagascar", "Algeria"],
    correctAnswer: "Kiribati",
    text: "La bandera de la imagen pertenece a Kiribati, el archipiélago situado al noroeste de Australia, en el océano Pacífico.",
    image:
      "https://viajes.nationalgeographic.com.es/medio/2017/01/30/kiribati_14447f1f.jpg",
  },
  {
    question: "¿RECONOCES EL PAÍS?",
    answers: ["Turquía", "Kazajistán", "Hungría"],
    correctAnswer: "Turquía",
    text: "El país de la silueta es Turquía. Una parte de su ciudad de Estambul es Europa, mientras que el resto del territorio es Asia.",
    image:
      "https://viajes.nationalgeographic.com.es/medio/2017/02/01/turquia_8db8b956.jpg",
  },
  {
    question: "¿A QUÉ PAÍS CORRESPONDE ESTA IMAGEN?",
    answers: ["Chile", "Argentina", "Rusia"],
    correctAnswer: "Argentina",
    text: "La imagen corresponde al glaciar Perito Moreno, ubicado en la Patagonia argentina. Su nombre se lo debe al explorador y geógrafo argentino Francisco Moreno.",
    image:
      "https://viajes.nationalgeographic.com.es/medio/2017/02/01/perito-moreno_0b9aeb7c.jpg",
  },
  {
    question: "¿DE DÓNDE ES ESTA BANDERA?",
    answers: ["Armenia", "Maldivas", "Uzbekistán"],
    correctAnswer: "Uzbekistán",
    text: "La bandera de Uzbekistán data de 1991. Cada uno de los colores representa un valor: el azul simboliza el cielo, el blanco es la paz y el verde su naturaleza. Las dos franjas rojas significan la fuerza, mientras que las estrellas representan las 12 provincias del país. Como país islámico, en ella también está reflejada la luna decreciente.",
    image:
      "https://viajes.nationalgeographic.com.es/medio/2017/02/01/uzbekistan_55f9c2e5.png",
  },
];

var correctAnswerElement;
var questionIndex = 0;
var timeLeft = 15;
var timer;
var correct = 0;
var incorrect = 0;

$(function () {
  // Function gets Questions-Data and append it to HTML and
  // returns element containing correct answer
  function getTrivia() {
    var correctAnswer;
    $("#answers").empty();
    $("#question-header").text(QUESTIONS[questionIndex].question);
    QUESTIONS[questionIndex].answers.forEach(function (answer) {
      var div = $("<div>").append(answer);
      div.appendTo($("#answers"));
      if (div.text() === QUESTIONS[questionIndex].correctAnswer) {
        correctAnswer = div;
      }
      div.addClass("hover");
      $("#Titles").css("font-size", "medium"); // Adds hover effect to each answer element
    });

    return correctAnswer;
  }

  // Function adds click event to each answer element and
  // checks for correct answer. If clicked element has
  // correct answer, text turns green and appends check mark
  // else text turns color gray and appends an X mark
  function checkCorrectAnswer() {
    $("#answers")
      .children()
      .click(function () {
        if ($(this).text() === correctAnswerElement.text()) {
          resetIntervalTimer();
          correct++;
          showCorrectAnswer();
        } else {
          resetIntervalTimer();
          Swal.fire({
            icon: "error",
            title: "Respuesta Incorrecta",
            html: "<small><p>" + QUESTIONS[questionIndex].text + "<p></strong>",
            footer:
              '<strong>Respuesta correcta:<p style="color:mediumseagreen;justify-content: center;">' +
              QUESTIONS[questionIndex].correctAnswer +
              "<p> </strong>",
          }).then(function () {
            incorrect++;

            $(this).addClass("wrong");
            $(this).append("<span> &#10008;</span>");
            $(this).siblings().not(correctAnswerElement).addClass("wrong");

            correctAnswerElement.append("<span> &#10004;</span>");
            correctAnswerElement.addClass("correct");

            $("#message").css("display", "block");
            $("#message").css("background", "red");
            $("#timeLeft").css("display", "none");
            $("#message").text("INCORRECTO");

            // $("#imageTrivia").attr("src", "https://images.angelpub.com/2016/35/39703/wrong.gif");
          });
        }

        $(this).parent().children().off("click"); // Prevent click event
        $("#answers").children().removeClass("hover"); // Turn off hover effect
      });
  }

  // Function shows the correct trivia answer
  function showCorrectAnswer() {
    // $("#answers").children().not(correctAnswerElement).addClass("wrong");
    // correctAnswerElement.append("<span> &#10004;</span>");
    // correctAnswerElement.addClass("correct");

    // $("#answers").children().removeClass("hover");
    // $("#answers").children().off("click");

    // $("#message").css("display", "block");
    // $("#timer").css("display", "block");
    // $("#message").text("CORRECTO");

    // $("#imageTrivia").attr("src", "https://c.tenor.com/BntXpMlrGuEAAAAC/check-correct.gif");
    Swal.fire({
      icon: "success",
      title: "Correcto",
      showConfirmButton: false,
      timer: 1600,
    });
  }

  // Function creates a countdown which is display on HTML
  // If timeLeft variable reach zero, correct answer shows up
  // and then wait for 4 seconds to restart
  function intervalTimer() {
    timer = setInterval(function () {
      if (timeLeft == 0) {
        incorrect++;
        showCorrectAnswer();
        clearInterval(timer);

        $("#timer").css("display", "none");
        $("#message").text("se acabó el tiempo!");
        $("#message").css("display", "block");

        setTimeout(function () {
          questionIndex++;
          startGame();
          $("#message").css("display", "none");
          $("#timeLeft").css("display", "block");
          $("#timerSeconds").text(timeLeft);
          $("#imageTrivia").attr("src", QUESTIONS[questionIndex].image);
        }, 5000);
      }
    }, 1000);
  }

  // Function clears countdown after an answer is click and
  // waits four seconds to restart
  function resetIntervalTimer() {
    clearInterval(timer);

    setTimeout(function () {
      questionIndex++;

      startGame();
      $("#message").css("display", "none");
      $("#timer").css("display", "block");
      $("#timeLeft").css("display", "block");

      $("#imageTrivia").attr("src", QUESTIONS[questionIndex].image);
    }, 2000);
  }

  function resetInervalfalse() {
    questionIndex++;

    startGame();
    $("#message").css("display", "none");

    $("#timeLeft").css("display", "block");

    $("#imageTrivia").attr("src", QUESTIONS[questionIndex].image);
  }

  // Function starts the game
  // If questionIndex reach QUESTIONS length, game ends and score
  // shows up, otherwise the games keeps running until last question
  function startGame() {
    if (questionIndex < QUESTIONS.length) {
      correctAnswerElement = getTrivia();

      checkCorrectAnswer();

      intervalTimer();
    } else {
      questionIndex = 0;
      $("#card").css("display", "none");
      $("#correct").text("Correcto: " + correct);
      $("#incorrect").text("Incorrecto: " + incorrect);
      $("#score").css("display", "block");

      var user = firebase.auth().currentUser;
      auth.onAuthStateChanged((user) => {
        var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth() + 1;
        var yyyy = hoy.getFullYear();
        var data_carpet = dd + "_" + mm + "_" + yyyy;

        var firebaseref = firebase
          .database()
          .ref(
            "Test/" +
              document.getElementById("Titles").innerText +
              "/" +
              data_carpet +
              "/" +
              user.displayName
          );
        const fs = firebase.firestore();

        firebaseref.push({
          // fecha:dd+'/'+mm+'/'+yyyy,
          usuario: user.displayName,
          Hora:
            hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds(),
          Correctas: correct,
          incorrectas: incorrect,
        });
      });
    }
  }

  // Click event button starts game
  $("#button").click(function () {
    correct = 0;
    incorrect = 0;
    questionIndex = 0;
    $("#card").css("display", "flex");
    $("#button").css("display", "none");
    startGame();
  });

  // Click event close score pop-up
  $("#close").click(function () {
    $("#score").css("display", "none");
    $("#button").css("display", "inline-block");
  });
});

("use strict");
class Circle {
  constructor(x, y, r, c, v, e) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
    this.v = v;
    this.e = e;
    this.a = 0.2;
  }
  draw() {
    this.sn += 0.3;
    this.y -= this.v;
    this.y < this.e ? (this.a -= 0.02) : "";
    san.beginPath();
    san.arc(this.x, this.y, this.r, 0, 44 / 7, false);
    san.fillStyle = `rgb(0,0,240)`;
    san.fill();
    san.closePath();
  }
  static push(n) {
    var rad = Mnx(1, 5),
      cx = Mnx(rad, W - rad),
      cy = n ? Mnx(H + rad, H + rad + 100) : Mnx(H * 1.2, H * 0.3),
      cl = Mnx(100, 250),
      vl = Mnx(0.5, 2),
      en = Mnx(H * 0.8, H * 0.25);
    return new Circle(cx, cy, rad, cl, vl, en);
  }
}
var Mnx = (n, x) => {
    return Math.random() * (x - n) + n;
  },
  W = window.innerWidth,
  H = window.innerHeight,
  san;
var ar = [];
for (var i = 0; i < 550; i++) {
  ar.push(Circle.push(false));
}

var draw = () => {
  for (var i = 0; i < ar.length; i++) {
    ar[i].draw();
    if (ar[i].a < 0) {
      ar[i] = Circle.push(true);
    }
  }
};
var init = () => {
  var can = document.querySelector("canvas");
  can.width = W;
  can.height = H;
  can.style.background = "white";
  can.style.position = "fixed";
  can.style.left = 0;
  can.style.top = 0;
  window.backdropFilter = "blur(2px)";
  san = can.getContext("2d");
  var up = () => {
    //san.fillStyle=`rgba(0,0,0,.1)`
    san.clearRect(0, 0, W, H);
    draw();
    webkitRequestAnimationFrame(up);
  };
  webkitRequestAnimationFrame(up);
};
onload = init;
