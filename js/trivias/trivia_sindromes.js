var QUESTIONS = [
  {
    question:
      "Se caracteriza por creer que un familiar o un amigo fue sustituido por un extraño…",
    answers: [
      "Síndrome de Capgras",
      "Síndrome de Fregoli",
      "Síndrome de Peter Pan",
    ],
    correctAnswer: "Síndrome de Capgras",
    image:
      "https://th.bing.com/th/id/R.2e18da19480d251f3d40ce618824c55d?rik=aA6ifTCG41QHhA&pid=ImgRaw&r=0",
  },
  {
    question: "¿Qué es un síndrome?",
    answers: [
      "Alteración en el estado de salud de un individuo",
      "Síntomas que definen una condición que se manifiesta en un sujeto",
      "Cambio reconocible en la salud física de una persona",
    ],
    correctAnswer:
      "Síntomas que definen una condición que se manifiesta en un sujeto",
    image: "https://netmd.org/images/00guillian-barre.png",
  },
  {
    question:
      "Se caracteriza porque el paciente cree que se puede transformar en animal…",
    answers: ["Licantropía clínica", "Síndrome animal", "Metamorfosis clínica"],
    correctAnswer: "Licantropía clínica",
    image:
      "https://media1.tenor.com/images/add4e4aa8cb901e343349a6a2f51a7ed/tenor.gif?itemid=6165285",
  },
  {
    question:
      "Este síndrome se caracteriza por estar relacionado con la cultura religiosa…",
    answers: [
      "Síndrome de Gasap",
      "Síndrome de Jerusalén",
      "Síndrome de Bovary",
    ],
    correctAnswer: "Síndrome de Jerusalén",
    image: "https://monophy.com/media/URq7eUzYeeaHOPlO5I/monophy.gif",
  },
  {
    question: "Síndrome descubierto por Joseph Westermeyer en 1972…",
    answers: ["Síndrome de Proteus", "Síndrome Amok", "Síndrome Westermeyer"],
    correctAnswer: "Síndrome Amok",
    image:
      "https://www.lifeder.com/wp-content/uploads/2016/11/s%C3%ADndrome-de-Amok.jpg",
  },
  {
    question:
      "A este síndrome lo representan en varias películas, como 'La mano, Dr. Strangelove' y en 'Los locos Addams'…",
    answers: [
      "Síndrome de Tourette",
      "Síndrome de la mano ajena",
      "Síndrome de Munchausen",
    ],
    correctAnswer: "Síndrome de la mano ajena",
    image:
      "http://4.bp.blogspot.com/-hOp-mdAQp9k/VQ7DON95qqI/AAAAAAAARck/6Nc7Ti5kouc/s1600/sindrome%2Bmano%2Bajena.jpg",
  },
  {
    question:
      "Los adultos se comportan como niños y se desentienden de las responsabilidades…",
    answers: [
      "Síndrome de Peter Pan",
      "Síndrome de Asperger",
      "Síndrome de Estocolmo",
    ],
    correctAnswer: "Síndrome de Peter Pan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5EN4Ic4RaGnxAtPru2lOYPZKXSS4cqiF_Q&usqp=CAU",
  },
  {
    question: "¿En qué consiste el síndrome de Cotard?",
    answers: [
      "El individuo cree que está muerto en vida",
      "El individuo piensa que es ajeno a su vida",
      "El individuo tiene alteraciones en los pies",
    ],
    correctAnswer: "El individuo cree que está muerto en vida",
    image:
      "https://cherry.img.pmdstatic.net/fit/https.3A.2F.2Fimg.2Eohmirevista.2Ecom.2Farticle.2Fsindrome-de-cotard.2Fsindrome-de-cotard_7f5dbbdf21cd189758a64a5575cee53a721a58f9.2Ejpg/1200x675/quality/80/sindrome-de-cotard-causas-y-tratamiento.jpg",
  },
  {
    question: "¿Por qué se produce el síndrome de Bálint?",
    answers: ["Problemas motores", "Ataxia óptica", "Problemas digestivos"],
    correctAnswer: "Ataxia óptica",
    image:
      "https://c.tenor.com/X73EqPfwAfIAAAAM/minion-any-questions-question.gif",
  },
  {
    question: "Significado de ST…",
    answers: [
      "Síntomas tracomotores",
      "Síndrome de Tanzania",
      "Síndrome de Tourette",
    ],
    correctAnswer: "Síndrome de Tourette",
    image: "https://i.gifer.com/CJsZ.gif",
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
        resetIntervalTimer();

        if ($(this).text() === correctAnswerElement.text()) {
          correct++;
          showCorrectAnswer();
        } else {
          incorrect++;
          $(this).addClass("wrong");
          $(this).append("<span> &#10008;</span>");
          $(this).siblings().not(correctAnswerElement).addClass("wrong");

          correctAnswerElement.append("<span> &#10004;</span>");
          correctAnswerElement.addClass("correct");

          $("#message").css("display", "block");
          $("#timeLeft").css("display", "none");
          $("#message").text("INCORRECTO");

          $("#imageTrivia").attr(
            "src",
            "https://media.baamboozle.com/uploads/images/49869/1618223208_15917_gif-url.gif"
          );
        }

        $(this).parent().children().off("click"); // Prevent click event
        $("#answers").children().removeClass("hover"); // Turn off hover effect
      });
  }

  // Function shows the correct trivia answer
  function showCorrectAnswer() {
    $("#answers").children().not(correctAnswerElement).addClass("wrong");
    correctAnswerElement.append("<span> &#10004;</span>");
    correctAnswerElement.addClass("correct");

    $("#answers").children().removeClass("hover");
    $("#answers").children().off("click");
    $("#timer").css("display", "none");
    $("#message").css("display", "none");
    $("#timeLeft").css("display", "none");
    // $("#message").text("CORRECTO");

    Swal.fire({
      icon: "success",
      title: "Correcto",
      showConfirmButton: false,
      timer: 1600,
    });
  }
  function showCorrectAnswertimer() {
    $("#answers").children().not(correctAnswerElement).addClass("wrong");
    correctAnswerElement.append("<span> &#10004;</span>");
    correctAnswerElement.addClass("correct");

    $("#answers").children().removeClass("hover");
    $("#answers").children().off("click");

    $("#message").css("display", "none");
    $("#timeLeft").css("display", "none");
    // $("#message").text("CORRECTO");
  }

  // Function creates a countdown which is display on HTML
  // If timeLeft variable reach zero, correct answer shows up
  // and then wait for 4 seconds to restart
  function intervalTimer() {
    timer = setInterval(function () {
      timeLeft--;
      $("#timerSeconds").text(timeLeft);

      if (timeLeft == 0) {
        incorrect++;
        showCorrectAnswertimer();
        clearInterval(timer);
        timeLeft = 15;
        $("#timeLeft").css("display", "none");
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
      timeLeft = 15;
      startGame();
      $("#message").css("display", "none");
      $("#timer").css("display", "flex");
      $("#message").text("SE HA TERMINADO EL TIEMPO!");
      $("#timeLeft").css("display", "block");
      $("#timerSeconds").text(timeLeft);
      $("#imageTrivia").attr("src", QUESTIONS[questionIndex].image);
      $("#imageTrivia").attr("src", QUESTIONS[questionIndex].image);
    }, 2000);
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
            "Trivia/" +
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
