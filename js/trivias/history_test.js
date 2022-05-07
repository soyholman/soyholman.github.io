var QUESTIONS = [
  {
    question:
      "Política reformista que se llevó a cabo en la Unión Soviética tras la llegada al poder (1985) de Mijaíl Gorbachov",
    answers: [
      "Revolución de Bolchevique",
      "Revolución de Febrero",
      "Perestroika",
    ],
    correctAnswer: "Perestroika",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/300px-Flag_of_the_Soviet_Union.svg.png",
  },
  {
    question: "¿En qué año estalló la Guerra de las Malvinas?",
    answers: ["1982", "1983", "1979", "1980"],
    correctAnswer: "1982",
    image:
      "https://thumbs.gfycat.com/ColossalShockedAfricanelephant-max-1mb.gif",
  },
  {
    question: "¿Qué era la Gestapo?",
    answers: [
      "El Comité para la Seguridad del Estado de la URSS",
      "La Milicia Voluntaria para la Seguridad Nacional Italiana",
      "La policía del régimen nazi",
    ],
    correctAnswer: "La policía del régimen nazi",
    image:
      "https://static01.nyt.com/images/2021/04/04/world/08nazi-ES-00/00AUSTRIA-NAZI3-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale",
  },
  {
    question: "¿Donde nace el movimiento sandinista?",
    answers: ["Honduras", "Guatemala", "El Salvador", "Nicaragua"],
    correctAnswer: "Nicaragua",
    image:
      "https://cuartoscuro.com/revista/wp-content/uploads/2020/12/sandino2.jpg",
  },
  {
    question:
      "¿En qué batalla los ingleses destrozaron a la armada italiana el 11 de noviembre de 1940?",
    answers: [
      "Batalla de Changde",
      "Batalla de Buna-Gona",
      "Batalla de Tarento",
    ],
    correctAnswer: "Batalla de Tarento",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tarantoharb1921.jpg/220px-Tarantoharb1921.jpg",
  },
  {
    question: "¿Con qué acontecimiento se dio inicio a la Revolución Francesa?",
    answers: [
      "Con la Toma de la Bastilla",
      "Con la ejecución de Luis XVI",
      "Con el golpe de estado de Napoleón Bonaparte",
    ],
    correctAnswer: "Con la Toma de la Bastilla",
    image:
      "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2019/08/06/5f15f06fb5e9a.r_d.516-211-0.jpeg",
  },
  {
    question: "¿'La Pasionaria' fue un personaje de cuál Guerra Civil",
    answers: [
      "Revolución mexicana",
      "Guerra Civil Argentina",
      "La Guerra Civil Española",
    ],
    correctAnswer: "La Guerra Civil Española",
    image:
      "http://3.bp.blogspot.com/-m_YTGvcXCLU/U0ATU8xMtsI/AAAAAAAACXg/NOZdJhNqoCg/s1600/dolores-ibarruri.jpg",
  },
  {
    question:
      "¿Quién comandaba las tropas patrióticas en la Batalla de Ayacucho?",
    answers: [
      "Antonio José de Sucre",
      "Francisco de Paula Santander",
      "Simón Bolívar",
    ],
    correctAnswer: "Antonio José de Sucre",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Batalla_de_Ayacucho_by_Mart%C3%ADn_Tovar_y_Tovar_%281827_-_1902%29.jpg/1200px-Batalla_de_Ayacucho_by_Mart%C3%ADn_Tovar_y_Tovar_%281827_-_1902%29.jpg",
  },
  {
    question: "¿En qué año cayó el Muro de Berlín?",
    answers: ["1987", "1989", "1991"],
    correctAnswer: "1989",
    image:
      "https://www.superprof.co/blog/wp-content/uploads/2019/12/caida-muro-de-berlin.gif",
  },
  {
    question:
      "¿A qué presidente de Estados Unidos derrocó el escándalo de Watergate?",
    answers: ["Lyndon Johnson", "Richard Nixon", "Ronald Reagan"],
    correctAnswer: "Richard Nixon",
    image:
      "https://www.lavanguardia.com/files/article_main_microformat/uploads/2016/11/06/5fa2f6ce3fecd.jpeg",
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
