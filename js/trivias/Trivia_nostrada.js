var QUESTIONS = [
  {
    question: "¿Cuándo muere John F. Kennedy?",
    answers: [
      "22 de noviembre de 1963",
      "15 de agosto de 1963",
      "19 de julio de 1963",
      "11 de diciembre de 1963",
    ],
    correctAnswer: "22 de noviembre de 1963",
    image:
      "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/582d7eae-2beb-4c9a-8c3f-1792a2dcb789/11ca6905-7cdc-4f0f-b57a-4fcc53a2d19b.jpg",
  },
  {
    question:
      "¿Las predicciones de Nostradamus están escritas en versículos de cuatro líneas, ¿cómo se llaman?",
    answers: ["Cuartetas", "Narrativa", "Sintaxis", "Lymrick"],
    correctAnswer: "Cuartetas",
    image:
      "https://media.gettyimages.com/photos/nostradamus-apothecary-author-translator-astrological-consultant-2-picture-id171394499?s=612x612",
  },
  {
    question: "¿Cuándo comenzó la II Guerra Mundial?",
    answers: ["1934", "1939", "1945", "1960"],
    correctAnswer: "1939",
    image:
      "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/582d7eae-2beb-4c9a-8c3f-1792a2dcb789/93281e1a-6f4f-42a5-8225-971a1457207d.jpg",
  },
  {
    question: "¿Cómo se llama el edificio que sustituye a las torres gemelas?",
    answers: [
      "One World Trade Center",
      "Torre Willis ",
      "432 Park Avenue",
      "The White House",
    ],
    correctAnswer: "One World Trade Center",
    image:
      "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/582d7eae-2beb-4c9a-8c3f-1792a2dcb789/0b572e82-1d41-44a7-b2d4-3768f1793619.jpg",
  },
  {
    question: "¿Qué imperio fue potencia mundial en el año de 1492 hasta 1658?",
    answers: [
      "Imperio Francés",
      "Imperio Español",
      "Imperio británico",
      "Imperio Alemán",
    ],
    correctAnswer: "Imperio Español",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Lahanas1913.jpg/330px-Lahanas1913.jpg",
  },
  {
    question:
      " Bestias salvajes hambrientas cruzan el río y la mayor parte del campo de batalla abucheará,¿A quién se refiere?",
    answers: ["Adolf Hitler", "Benito Mussolini", "Josef Stalin", "Hirohito"],
    correctAnswer: "Adolf Hitler",
    image:
      "https://www.recreoviral.com/wp-content/uploads/2016/12/Cover-nostradamus.jpg",
  },
  {
    question:
      "Cerca de Italia nacerá un Emperador,que le costará muy caro al Imperio. ¿a quien se refiere?",
    answers: [
      "Benito Mussolini",
      "Napoleón Bonaparte",
      "Winston Churchill",
      "Rey Enrique II",
    ],
    correctAnswer: "Napoleón Bonaparte",
    image:
      "https://th.bing.com/th/id/OIP.J_GVgF9FK5JlRuTCkC5TnQHaE8?pid=ImgDet&rs=1",
  },
  {
    question: "¿Qué afirmó usar Nostradamus como base para sus profecías?",
    answers: [
      "Astrología",
      "Experiencias Vitales",
      "La Biblia",
      "Sus viajes por el mundo",
    ],
    correctAnswer: "Astrología",
    image:
      "https://th.bing.com/th/id/R.efda20dff51216d09d83a17efed33b88?rik=SxTOWX2pF7dtkA&riu=http%3a%2f%2fgreeknewsondemand.com%2fwp-content%2fuploads%2f2018%2f12%2fnostradamus-world-war-3-2019-678x381.jpg&ehk=lawZnIkFb2GVzqDEqHRaphdhGGdDYNSpdnxkIEGCI08%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
  },
  {
    question: " ¿Cuál fue la predicción final de Nostradamus?",
    answers: [
      "Su propia Muerte",
      "El hombre caminando sobre la luna",
      "El mundo era redondo",
      "El fin del mundo",
    ],
    correctAnswer: "El fin del mundo",
    image:
      "https://th.bing.com/th/id/OIP.9jBNHXRucnuAgDVGq7sqCQHaLf?pid=ImgDet&rs=1",
  },
  {
    question: "¿Cuál es la fecha de la muerte de Nostradamus?",
    answers: [
      "1 de julio de 1567",
      "11 de septiembre de 1566",
      "10 de abril de 1567",
      "1 de julio de 1566",
    ],
    correctAnswer: "1 de julio de 1566",
    image:
      "https://th.bing.com/th/id/R.7f36be2673ba369ec9c0e563dc344bcd?rik=BmqYhmqcIWAHGQ&riu=http%3a%2f%2fcdn.images.dailystar.co.uk%2fdynamic%2f1%2fphotos%2f614000%2f336614.jpg&ehk=jtcYY0mUI6okkAV3L2b9KYE%2bzbOgB%2beBudAz5L80uUY%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    question:
      "Antes de dedicar todo su tiempo a sus profecías, ¿qué ocupación tenía Nostradamus?",
    answers: ["Doctor", "Juez", "Politico", "Comerciante de especias"],
    correctAnswer: "Doctor",
    image:
      "https://th.bing.com/th/id/R.800169aa7ddafe49d7a8d85f46d04fad?rik=GUya4hZN3B1RUw&pid=ImgRaw&r=0",
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
