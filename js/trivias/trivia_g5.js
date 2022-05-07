var QUESTIONS = [
  {
    question: "¿Cuál es el músculo más fuerte de todo el cuerpo humano?",
    answers: ["El bíceps", "El abdomen", "La Lengua", "La pantorrilla"],
    correctAnswer: "La Lengua",
    image:
      "https://userscontent2.emaze.com/images/5f740f07-a8e0-4591-96d4-8904dc650335/42d265da9a57b6ba653ba5dfc86167e0.gif",
  },
  {
    question:
      "En el tercer viaje de Colón hacia América, ¿cuál fue el primer territorio de tierra firme en el cual desembarcó?",
    answers: [
      "Chapultepec, México",
      "Veragua, Panamá",
      "Trinidad",
      "Península de Paria, Venezuela",
    ],
    correctAnswer: "Península de Paria, Venezuela",
    image:
      "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/16179623/image/f7d6dc3e70d636b51e6e88bec2fa8160",
  },
  {
    question:
      "¿A qué edad fue asesinado el presidente de Estados Unidos, John F. Kennedy?",
    answers: ["46 años", "50 años", "48 años", "41 años"],
    correctAnswer: "46 años",
    image:
      "https://imagenes.elpais.com/resizer/BQZuH6Li1CJMjA716w-pjbIh-oQ=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/WVAKM5CF5TRYYUQD7PHAWGKNPA.jpg",
  },
  {
    question: "¿Es cierto que el papa más joven contaba con tan solo 11 años?",
    answers: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    image:
      "https://cdn.dribbble.com/users/60517/screenshots/787426/questions.gif",
  },
  {
    question:
      "¿Dónde fue transmitida la primera señal televisiva de nuestra historia?",
    answers: [
      "Washington D.C, Estados Unidos",
      "Londres Inglaterra",
      "California Estados Unidos",
      "Toulose Francia",
    ],
    correctAnswer: "Londres Inglaterra",
    image:
      "https://showelectroluminoso.files.wordpress.com/2014/04/photofunia-very-old-telly-regular-2014-04-22-12-42-23.gif",
  },
  {
    question: "Entre estos animales, ¿cuál es el más longevo?",
    answers: ["Tarántula Goliat", "Pez Koi", "Koala", "Escorpión Azul"],
    correctAnswer: "Pez Koi",
    image:
      "https://i.pinimg.com/originals/6b/6e/6a/6b6e6ad625caf5cfe546a67a2f545231.gif",
  },
  {
    question: "¿Quién es mayor?",
    answers: ["Katty Perry", "Nicki Minaj", "Lady Gaga"],
    correctAnswer: "Nicki Minaj",
    image:
      "https://media4.giphy.com/media/QytvVmADzxJhDswSFO/200w.gif?cid=82a1493b6r5hdq2i7x9g9d2qyalhvet8vazb6v9cocfwc8iw&rid=200w.gif&ct=g",
  },
  {
    question:
      "La película Brokeback Mountain (Secreto en la Montaña) ganó uno de estos premios Óscar... ¿cuál fue?",
    answers: [
      "Mejor Película Dramática",
      "Mejor Canción Original",
      "Mejor Director",
      "Mejor Actor de Reparto",
    ],
    correctAnswer: "Mejor Director",
    image:
      "https://i0.wp.com/25.media.tumblr.com/tumblr_lqy1o7HEYc1r11gq8o1_500.gif",
  },
  {
    question:
      "¿A qué elemento hace referencia la letra P de la tabla periódica?",
    answers: ["Paladio", "Polonio", "Tántalo", "Fósforo"],
    correctAnswer: "Fósforo",
    image:
      "http://www.gifde.com/js_pics_aux/descarga.php?descarga=si&c=gif/otros/ciencia/quimica/&f=quimica-036.gif",
  },
  {
    question: "Si hubieses nacido en Zimbabue... ¿cuál sería tu nacionalidad?",
    answers: ["Zimbabuense", "Zambeze", "Zimbo", "Zimbanbuino"],
    correctAnswer: "Zimbabuense",
    image: "https://thumbs.gfycat.com/GargantuanCanineHoverfly-max-1mb.gif",
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
