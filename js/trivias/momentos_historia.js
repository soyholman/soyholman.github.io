var QUESTIONS = [
  {
    question: "¿A qué importante cambio hace referencia esta imagen?",
    answers: [
      "La Revolución Industrial",
      "La Revolución Francesa",
      "La era agraria",
      "El rompimiento de la división de las clases sociales",
    ],
    correctAnswer: "La Revolución Industrial",
    image:
      "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1544625297/xh9eninvx965ihqaoyl7.jpg",
  },
  {
    question:
      "¿Qué momento significó el inicio del régimen fascista que ocasionó la muerte de millones de judíos?",
    answers: [
      "Joseph Stalin toma el poder del Partido Socialista de la Unión Soviética",
      "Adolf Hitler es nombrado canciller de Alemania",
      "Napoleón Bonaparte se autoproclama primer cónsul de Francia",
    ],
    correctAnswer: "Adolf Hitler es nombrado canciller de Alemania",
    image:
      "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1544625504/rqx3st8k78ypvy77mpfo.jpg",
  },
  {
    question: "El cristianismo pudo surgir debido a la caída del Imperio…",
    answers: ["Persa", "Romano", "Griego", "Islámico"],
    correctAnswer: "Romano",
    image:
      "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1544625634/hk3j4zyh6a3gfer7m8m7.jpg",
  },
  {
    question:
      "¿Qué artefacto permitió la primera modernización de la palabra escrita?",
    answers: [
      "La máquina de escribir",
      "La imprenta de Gutenberg",
      "El computador",
      "El uso de la tinta china",
    ],
    correctAnswer: "La imprenta de Gutenberg",
    image:
      "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1544625829/qyfqdw3i2bypw0ccp3kv.jpg",
  },
  {
    question: "¿Qué conflicto bélico trajo la caída del Imperio persa?",
    answers: [
      "La guerra de los 100 años",
      "Las guerras médicas",
      "Las guerras homéricas",
      "La guerra de Vietnam",
    ],
    correctAnswer: "Las guerras médicas",
    image:
      "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1544625929/cupjqo6z9o2qyh22psbk.jpg",
  },
  {
    question:
      "¿La frase: “Un pequeño paso para el hombre, pero un gran salto para la humanidad” hace referencia a qué importante logro?",
    answers: [
      "La caída del muro de Berlín",
      "La culminación de la Gran Muralla china",
      "El primer hombre en la Luna",
      "La creación de la bomba atómica",
    ],
    correctAnswer: "El primer hombre en la Luna",
    image:
      "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1544627107/r2s6efciucuuqmn9uac5.jpg",
  },
  {
    question:
      "¿La reforma protestante representó la ruptura de la Iglesia católica que dio origen a las subdivisiones religiosas del presente?",
    answers: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    image:
      "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1544627210/gqhraeszoq3xs7rwqplc.jpg",
  },
  {
    question: "¿Cuándo fue derrotado el fascismo alemán de Hitler?",
    answers: ["1945", "1944", "1946", "1935"],
    correctAnswer: "1945",
    image:
      "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1544627511/akcc1v9ict5jquh3c6iy.jpg",
  },
  {
    question: "¿Qué antibiótico representó el inicio de la medicina moderna?",
    answers: ["La aspirina", "La globulina", "El misoprostol", "La penicilina"],
    correctAnswer: "La penicilina",
    image:
      "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1544627630/zggoqh58en8glg2cgvjl.jpg",
  },
  {
    question:
      "¿Qué ocasionó el suicidio y desempleo de miles de trabajadores estadounidenses en 1929?",
    answers: [
      "La muerte de Kennedy",
      "La caída de la bolsa de Wall Street",
      "El incidente de Haymarket",
      "Hundimiento del Titanic",
    ],
    correctAnswer: "La caída de la bolsa de Wall Street",
    image:
      "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2015/10/24/14456818009417.jpg",
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

          // $("#message").css("display", "block");
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
