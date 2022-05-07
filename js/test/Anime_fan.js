var QUESTIONS = [
  {
    question: " ¿Cuál es el apellido de los hermanos de 'Fullmetal Alchemist'?",
    answers: [" Mustang", "Hohenheim", "Elric", "Ulrich"],
    correctAnswer: "Elric",
    text: "Los protagonistas de la serie Fullmetal Alchemist son los hermanos Edward y Alphonse Elric.",
    image:
      "https://i.pinimg.com/564x/d3/36/7f/d3367fd72d8a57fc0fa5f37ec4b77a12.jpg",
  },
  {
    question: " ¿Cuál es el animé con más duración en el mundo?",
    answers: ["Naruto", "Sazae-san", "Doraemon", "One Piece"],
    correctAnswer: "Sazae-san",
    text: "El animé con más duración del mundo es Sazae-san, que se estrenó en 1969 y sigue en emisión. Actualmente cuenta con más de 8 mil episodios.",
    image:
      "https://i.pinimg.com/564x/31/0b/85/310b85267c4951edbad104df20f15ad1.jpg",
  },
  {
    question: "¿Qué deporte se practica en 'Captain Tsubasa'?",
    answers: ["Voleibol", "Ajedrez", "Fútbol", "Béisbol"],
    correctAnswer: "Fútbol",
    text: "Captain Tsubasa o Supercampeones es un animé que aborda la historia de un jugador de fútbol que sueña con jugar profesionalmente.",

    image:
      "https://i.pinimg.com/564x/0b/4e/51/0b4e5178af575e01b6fbd5e0983fe1f0.jpg",
  },
  {
    question: "¿Cuál es el animé más visto en Crunchyroll durante el año 2020?",
    answers: [
      "Black Clover",
      "Attack on Tita",
      "Jujutsu Kaisen",
      "Boruto: Naruto Next Generation",
    ],
    correctAnswer: "Black Clover",
    text: "Black Cloveres el animé más visto en Crunchyroll durante el año 2020. Fue el número 1 en 87 países, superando a Jujutsu Kaisen que fue líder en 71 países.",
    image:
      "https://i.pinimg.com/564x/cf/94/0a/cf940a0389fa08e3469daba6752d8fb3.jpg",
  },
  {
    question:
      " ¿Cuál es el episodio mejor valorado de un animé en el portal de IMDb?",
    answers: [
      " «150146» de The Promised Neverland",
      "«Hero» de Attack on Titan",
      "«Saikyô no hîrô» de One Punch Man",
      "«Cho to ko» de Boruto: Naruto Next Generation",
    ],
    correctAnswer: "«Hero» de Attack on Titan",
    text: "«Hero» es el episodio mejor valorado de todos los tiempos para una serie de animé, según la página web de IMDb. Este es el capítulo 17 de la temporada 3 de Attack on Titan, y tiene una valoración de 9,9/10 con más de 60 mil críticas.",
    image:
      "https://i.pinimg.com/564x/02/23/9e/02239e9a5c9ff289161ed6ea08ea9999.jpg",
  },
  {
    question:
      "¿Cuántas transformaciones de Super Saiyajin hay en el canon de 'Dragon Ball'?",
    answers: ["3", "4", "8", "5"],
    correctAnswer: "5",
    text: "Hay, hasta ahora, cinco transformaciones de Super Saiyajin en el canon de Dragon Ball. Esto es porque el Super Saiyajin fase 4, al igual que todo lo que sucede en Dragon Ball GT fue sustituido por Dragon Ball Super.",
    image:
      "https://i.pinimg.com/564x/21/c7/8f/21c78f9b11406fe5df076a31020b27b3.jpg",
  },
  {
    question: "¿Qué nombre tiene el personaje Ash Ketchum en Japón?",
    answers: [" Shigeru", "Satoshi", "Kenji", "Ash"],
    correctAnswer: "Ash",
    text: "El nombre de Ash en el idioma original de la serie Pokémon es Satoshi, heredado del creador de los videojuegos Satoshi Tajiri.",
    image:
      "https://i.pinimg.com/564x/98/bc/35/98bc3565b73bc34066fcad783c51fcee.jpg",
  },
  {
    question: "¿A qué público va dirigido un animé Seinen?",
    answers: [" Adolescentes", "Niños", "Mujeres adultas", "Hombres adultos"],
    correctAnswer: "Hombres adultos",
    text: "Los animé Seinen están dirigidos para hombres adultos, por lo general son historias más profundas que tocan temas como la política.",
    image:
      "https://i.pinimg.com/564x/0a/2a/bc/0a2abc80f94780a905b31451f820861f.jpg",
  },
  {
    question: "¿Cuál es el verdadero nombre de L en la serie 'Death Note'?",
    answers: ["Eraldo Coil", "Light Yagami", "Elle Lawliet", "Hideki Ryuga"],
    correctAnswer: "Elle Lawliet",
    text: "En el animé Death Note, el nombre real del personaje L es revelado por Light cuando logra derrotarlo. Su nombre es Elle Lawliet.",
    image:
      "https://i.pinimg.com/564x/5a/27/39/5a2739cd6bd6e9dff8b0a93a711439a8.jpg",
  },
  {
    question: "¿Cuántos episodios tiene la serie 'Naruto Shippuden'?",
    answers: ["623", "330", "500", "450"],
    correctAnswer: "500",
    text: "Naruto Shippuden tiene un total de 500 episodios, sumándole el relleno. La serie inició en febrero de 2007 y terminó diez años después, en marzo de 2017.",
    image:
      "https://i.pinimg.com/564x/ec/ca/cf/eccacfe4389e748f00b3171b4452a33e.jpg",
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
