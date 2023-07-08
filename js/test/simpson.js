var QUESTIONS = [
  {
    question: "¿En qué año se transmitió el primer episodio de la serie?",
    answers: ["1989", "1969", "1990"],
    correctAnswer: "1989",
    image:
      "https://static.vix.com/es/sites/default/files/n/nacimiento-de-bart-simpson.gif",
    text: "La familia Simpson apareció por primera vez en los cortos de The Tracey Ullman Show el 19 de abril de 1987.",
  },
  {
    question: "¿Cómo se llama la madre de Homero?",
    answers: ["Mona Simpson", "Patty Simpson", "Luann Simpson"],
    correctAnswer: "Mona Simpson",
    text: "El personaje hizo su debut en televisión el 19 de noviembre de 1995, en el episodio “Mother Simpson”, en el cual Homero pensaba que su madre estaba muerta",
    image: "https://j.gifs.com/Z667O2.gif",
  },
  {
    question: "¿Qué instrumento tocaba Lisa?",
    answers: ["Trombón", "Saxofón", "Piano"],
    correctAnswer: "Saxofón",
    text: "Lisa es una amante de la música jazz, por lo que toca el saxofón barítono y en ocasiones la guitarra.",
    image:
      "https://static.vix.com/es/sites/default/files/n/nacimiento-de-bart-simpson.gif",
  },
  {
    question: "¿Quién hace la voz de Homero Simpson en inglés?",
    answers: ["James L. Brooks", "Matt Groening", "Dan Castellaneta"],
    correctAnswer: "Dan Castellaneta",
    text: "Es un comediante y artista de voz estadounidense popular por la interpretación de las voces de Homero Simpson, Krusty el payaso, el jardinero Willie, entre otros.",
    image:
      "https://i.pinimg.com/originals/78/08/12/7808128339ecb0fca5ecf8aed56cdb0f.gif",
  },
  {
    question:
      "¿De cuánto es el monto que aparece en la caja registradora cuando pasan a Maggie en el intro?",
    answers: ["687,65", "847,63", "500,87"],
    correctAnswer: "847,63",
    text: "Para 1989, se estimaba que mantener a un bebé en Estados Unidos durante un mes  costaba alrededor de 847,63 dólares",
    image: "https://media.giphy.com/media/l2JefdrXcqBgL3rqM/giphy.gif",
  },
  {
    question: "¿Cuántos episodios tiene la serie?",
    answers: ["869", "563", "639"],
    correctAnswer: "639",
    text: "Es la serie con más capítulos emitidos en prime time de la televisión de Estados Unidos.",
    image: "https://media1.giphy.com/media/3o6Mbm4FawCVVGvQ1G/giphy.gif",
  },
  {
    question: "¿Cuál fue la primera palabra de Lisa?",
    answers: ["Bart", "Mamá", "Homero"],
    correctAnswer: "Bart",
    text: "En el episodio 10 de la temporada 4, Bart intenta huir de casa, debido a los celos que siente con la llegada de Lisa a la familia.",
    image: "https://c.tenor.com/CgPGqAeM4wEAAAAC/risa-lisa.gif",
  },
  {
    question: "¿Por qué Los Simpson son amarillos?",
    answers: [
      "Porque hace mejor contraste en televisión",
      "Para llamar la atención del espectador",
      "Porque es el color de la felicidad",
    ],
    correctAnswer: "Para llamar la atención del espectador",
    text: "Según su creador Matt Groening, quería captar la atención del público y que los personajes se vieran distinto a lo demás que había en televisión.",
    image:
      "http://www.solofondos.com/wp-content/uploads/2015/04/fondo-de-pantalla-de-los-simpson-en-movimiento.gif",
  },
  {
    question: "¿Cómo se llama el gato de Los Simpson?",
    answers: ["Willie", "Bola de nieve", "Ayudante de santa"],
    correctAnswer: "Bola de nieve",
    text: "A los largo de la serie la familia Simpson ha tenido cinco gatos con el mismo nombre, cuyas diferencias son el color y el sexo.",
    image:
      "https://64.media.tumblr.com/96279961dfef7ab298fd8b8ab0287a32/tumblr_ovizpqx15z1uaqtxco1_540.gifv",
  },
  {
    question: "¿Cuántos premios ha ganado la serie?",
    answers: ["62", "98", "105"],
    correctAnswer: "105",
    text: "Entre los premios que ha recibido la serie destacan: 27 Premios Emmy, 27 Premios Annie, 7 Premios Environmental Media, 7 Premios WGA, 6 Premios Genesis, 5 Premios People & Choice, 3 Premios British Comedy y 1 Premio Peabody.",
    image:
      "https://media1.giphy.com/media/l2JejMgVoP5byGhDq/giphy.gif?cid=790b7611f9979cac91dc0023bf75e2f8a2422e853abaa8db&rid=giphy.gif&ct=g",
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

      var imageTrivia = $("#imageTrivia");
      imageTrivia.on("error", function () {
        // Handle error when the image source doesn't exist
        console.log("Image source does not exist.");
      });
    }, 1500);
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
