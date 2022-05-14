var QUESTIONS = [
  {
    question:
      "La famosa caja negra está normalmente situada en la parte trasera de los aviones…",
    answers: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    text: "Este artefacto registra la actividad de los instrumentos y las conversaciones de los tripulantes. Se ubica en este lugar debido a que corre menos riesgo de sufrir daños.",
    image:
      "https://i.pinimg.com/564x/b5/be/37/b5be3705a0d67e8ea039bb651430b6de.jpg",
  },
  {
    question: "La palabra “ojalá” procede del árabe…",
    answers: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    text: "Procede del árabe wa-sa allah, que significa “y quiera Dios”. ",
    image:
      "https://i.pinimg.com/564x/fc/e0/f6/fce0f6027d2fcbbd232fddcd71873f03.jpg",
  },
  {
    question:
      "El café era considerado una bebida satánica hasta que recibió la bendición papal…",
    answers: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    text: "Fue Clemente VIII, que tras probar el café exclamó que sería pecado dejar para los descreídos una bebida que él encontró deliciosa que había que impartirle la bendición para hacerla verdaderamente cristiana.",

    image:
      "https://i.pinimg.com/564x/fd/ec/13/fdec1343f32c001357bca30b78d72853.jpg",
  },
  {
    question:
      "Existen estudios estadísticos fiables que sostienen sin ningún género de duda que nacen más bebés cuando hay luna llena…",
    answers: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    text: "¡Justo al contrario! Hay numerosos estudios estadísticos que desmienten esta creencia tan popular, incluso entre enfermeras de maternidad.",
    image:
      "https://i.pinimg.com/564x/d4/13/67/d41367ff482097646eadbbc8569b1ac8.jpg",
  },
  {
    question:
      "Argentina fue el primer país sudamericano en celebrar una Copa Mundial de Fútbol…",
    answers: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    text: "Fue Uruguay en 1930. De hecho fue la primera Copa Mundial de Fútbol de todas. Argentina celebró su primera copa mundial en el año 1978.",
    image:
      "https://i.pinimg.com/564x/51/1a/00/511a0025239510486639bfc9c4c63dcd.jpg",
  },
  {
    question:
      "Si dejáramos caer una pluma y un ladrillo en un tubo al vacío, ambos objetos llegarían al suelo al mismo tiempo…",
    answers: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    text: "Sin la fricción del aire, la pluma tiene la misma aceleración que el ladrillo. ",
    image:
      "https://i.pinimg.com/564x/c8/55/bf/c855bf578539e7a3bd9e68227f23a238.jpg",
  },
  {
    question:
      "El vocalista de la banda The Rolling Stones, Mick Jagger, estudió en la School of Economics de Londres…",
    answers: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    text: "Jagger estudió economía, pero nunca acabó la carrera.",
    image:
      "https://i.pinimg.com/564x/f3/d0/b5/f3d0b5937e1cf5a0959df179fb1a5181.jpg",
  },
  {
    question:
      "En Surinam, un hombre se puede casar con la hermana de su viuda…",
    answers: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    text: "Si el hombre tiene una viuda, es que está muerto.",
    image:
      "https://i.pinimg.com/564x/9a/41/30/9a4130c1c186f0f470b1827855886c9f.jpg",
  },
  {
    question: "Esta construcción es visible a simple vista desde la Luna…",
    answers: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    text: "El astronauta Alan Bean comentó que desde la Luna solo se ven masas de nubes, áreas desérticas y vegetación. De igual manera la Gran Muralla China no es más ancha que una carretera normal.",
    image:
      "https://i.pinimg.com/564x/57/55/47/57554713c114a5dbc14b3740d1206d38.jpg",
  },
  {
    question:
      "Alfred Hitchcock tiene el récord de ser el director no estadounidense que más veces ha recibido un Oscar al mejor director… ",
    answers: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    text: "Sorprendentemente Hitchcock fue nominado cinco veces, pero nunca ganó un solo premio de la academia al mejor director. ",
    image:
      "https://i.pinimg.com/564x/82/76/80/827680defbbc2289495aec1f8d78a6fb.jpg",
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
