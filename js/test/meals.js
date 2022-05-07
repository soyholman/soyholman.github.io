var QUESTIONS = [
  {
    question: "Pasta",
    answers: ["China", "Italia", "Marruecos"],
    correctAnswer: "China",
    text: "Los orígenes de la pasta: un alimento milenarioAunque la leyenda popular afirma que fue Marco Polo quien introdujo la pasta en Italia después de su exploración del Lejano Oriente a finales del siglo XIII, en realidad, la pasta se remonta al siglo IV a.C.",
    image: "https://acegif.com/wp-content/gifs/spaghetti-38.gif",
  },
  {
    question: "Papas fritas",
    answers: ["Francia", "Estados Unidos", "Bèlgica"],
    correctAnswer: "Bèlgica",
    text: "La tradición popular afirma que las papas fritas originales nacieron en Namur, en la Bélgica francófona, donde los lugareños eran especialmente aficionados al pescado frito",
    image:
      "https://t2.uc.ltmcdn.com/es/posts/4/5/6/como_hacer_patatas_fritas_crujientes_40654_600.jpg",
  },
  {
    question: "Hamburguesa",
    answers: ["Reino Unido", "Alemania", "Estados Unidos"],
    correctAnswer: "Alemania",
    text: "Y la palabra hamburguesa tiene su origen enHamburgo, el lugar donde nació. El origen real de la hamburguesa actual es el Rundstück warm, un sándwich de cerdo típico de Alemania que, traducido, significa “pedazo redondo caliente” y que es el ancestro de la archiconocida hamburguesa",

    image: "https://media2.giphy.com/media/9AIdbTou0UXsWB7dPX/giphy.gif",
  },
  {
    question: "Helado",
    answers: ["China", "Estados Unidos", "Italia"],
    correctAnswer: "China",
    text: "El helado se creó por primera vez hace 4 mil años en China con ingredientes a base de arroz, especias, hielo compactado, leche y suave crema. Se dice que las clases altas eran quienes lo consumían, esto porque los ingredientes eran difíciles de conseguir.",
    image: "https://metode.es/wp-content/uploads/2017/07/gelats.jpg",
  },
  {
    question: "Churros",
    answers: ["China", "España", "Mèxico"],
    correctAnswer: "China",
    text: "Se cree que la historia del churro comienza en China, donde mercaderes portugueses conocieron el “Youtiao”, una tira de masa frita que se servía en el desayuno; dicho bocadillo originalmente se servía en pares, esto como un símbolo de la dinastía Song Qin Hui y su esposa",
    image: "https://c.tenor.com/PAEYhc0JdM4AAAAC/churros-dipping.gif",
  },
  {
    question: "Cebiche",
    answers: ["Perù", "Nicaragua", "Costa Rica"],
    correctAnswer: "Perù",
    text: "Hay varias teorías sobre el origen del Cebiche. Una de las más importantes tiene que ver con la cultura preincaica mochica -ubicada en la costa del Perú-. Ellos cortaban los pescados en trozos y les añadían sal, limón, limas y tumbos -frutos andinos-.",
    image:
      "https://www.aboutespanol.com/thmb/vd9I6msqZqdRKsyN2BSnQneuPwM=/3776x2124/smart/filters:no_upscale()/ceviche-5b01daff6bf0690036a376d8.jpg",
  },
  {
    question: "Yoltamales ",
    answers: ["Guatemala", "Costa Rica", "Nicaragua"],
    correctAnswer: "Nicaragua",
    text: "Delicioso tamal proveniente de Nicaragua, compuesto por masa de maíz con un toque dulce puedes acompañarlo con crema de leche o queso.",
    image:
      "https://www.recetas-nicaragua.com/base/stock/Recipe/165-image/165-image_web.jpg",
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
