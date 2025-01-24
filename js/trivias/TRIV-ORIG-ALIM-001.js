var QUESTIONS = [
  {
    "question": "Pasta",
    "answers": [
      "China",
      "Italia",
      "Marruecos"
    ],
    "correctAnswer": "China",
    "image": "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/cdn/e39f9e7e-681e-4b4f-9a46-39fed2fb8378/ba1c90f4-946d-4c6c-a299-577bd297c212.jpg"
  },
  {
    "question": "Papas Fritas",
    "answers": [
      "Francia",
      "Estados Unidos",
      "Bélgica"
    ],
    "correctAnswer": "Bélgica",
    "image": "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/cdn/e39f9e7e-681e-4b4f-9a46-39fed2fb8378/324dd369-3023-4740-bd6b-9cdee423152a.jpg"
  },
  {
    "question": "Hamburguesa",
    "answers": [
      "Reino Unido  ",
      " Alemania  ",
      "Estados Unidos"
    ],
    "correctAnswer": " Alemania  ",
    "image": "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/cdn/e39f9e7e-681e-4b4f-9a46-39fed2fb8378/e3d06ee3-16f3-4af2-8da1-e39b98372d4a.jpg"
  },
  {
    "question": "Helado",
    "answers": [
      "China   ",
      "Estados Unidos  ",
      " Italia"
    ],
    "correctAnswer": "China   ",
    "image": "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/cdn/e39f9e7e-681e-4b4f-9a46-39fed2fb8378/40f717fe-4fc2-4beb-97f1-34e08142525c.jpg"
  },
  {
    "question": "Churros",
    "answers": [
      "China   ",
      "España   ",
      "México"
    ],
    "correctAnswer": "China   ",
    "image": "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/cdn/e39f9e7e-681e-4b4f-9a46-39fed2fb8378/4af5b55e-f812-494f-8183-8730a0a688bf.jpg"
  },
  {
    "question": "Ensalada César",
    "answers": [
      "Dinamarca   ",
      "Italia   ",
      "México"
    ],
    "correctAnswer": "México",
    "image": "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/cdn/e39f9e7e-681e-4b4f-9a46-39fed2fb8378/e57ed9e1-6cc5-41ae-8aa8-ec7e784ec1ed.jpg"
  },
  {
    "question": "Pollo Frito",
    "answers": [
      "India   ",
      "Francia   ",
      "Estados Unidos"
    ],
    "correctAnswer": "Estados Unidos",
    "image": "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/cdn/e39f9e7e-681e-4b4f-9a46-39fed2fb8378/bdf91029-f761-46a1-8b6b-2787601bf06b.jpg"
  }
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
