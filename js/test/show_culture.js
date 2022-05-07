var QUESTIONS = [
  {
    question: "En Rusia las montañas rusas se conocen como…",
    answers: ["Se les llama igual", "Montañas americanas", "Rollercoaster"],
    correctAnswer: "Montañas americanas",
    text: "El origen de las montañas rusas en parques de diversiones viene dado por los grandes toboganes de madera construidos en los inviernos de Rusia que descendían con trineos deslizables sobre la nieve.",
    image:
      "https://www.forestalmaderero.com/wp-content/uploads/2018/08/montana-rusa-en-madera-3.jpg",
  },
  {
    question: "¿Cada cuánto tiempo se celebran los mundiales de rugby?",
    answers: ["6 años", "2 años", "4 años"],
    correctAnswer: "4 años",
    text: "Los mundiales de rugby se celebran cada cuatro años desde 1987.",
    image:
      "https://as01.epimg.net/masdeporte/imagenes/2019/09/18/reportajes/1568806488_491802_1568906513_noticiareportajes_grande.jpg",
  },
  {
    question:
      "¿Cuántas veces se ha divorciado el príncipe Carlos de Inglaterra? ",
    answers: ["Ninguna", "Una", "Dos"],
    correctAnswer: "Una",
    text: "El príncipe Carlos, también conocido como príncipe de Gales se divorció de la princesa Diana en 1996.",

    image:
      "https://i.pinimg.com/originals/1b/66/5e/1b665e46a8e313c81dda91ce2bc8ad1d.gif",
  },
  {
    question: " ¿Cuántas consonantes tiene el abecedario?",
    answers: ["22 consonantes", "21 consonantes", "20 consonantes"],
    correctAnswer: "22 consonantes",
    text: "Recordemos que en el alfabeto del idioma español incluimos la letra «ñ», por lo tanto tiene 22 consonantes.",
    image: "https://c.tenor.com/S7X_j7s212kAAAAM/dictionary-simpsons.gif",
  },
  {
    question: "¿Con qué se fabricaba el pergamino?",
    answers: ["Cera", "Arcilla", "Pieles de animales"],
    correctAnswer: "Pieles de animales",
    text: "Para la fabricación del pergamino se usaban pieles de corderos, terneros o cabritos jóvenes.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Permennter-1568.png",
  },
  {
    question: "¿Cómo se suicidó Cleopatra?",
    answers: [
      "Por el corte de venas",
      "Mediante una mordedura de cobra",
      "Dejó que sus sirvientes la asesinaran",
    ],
    correctAnswer: "Mediante una mordedura de cobra",
    text: "Esta es una creencia popular que Cleopatra se suicidó con la mordedura de una cobra, no se encontró ninguna serpiente venenosa junto a su cadáver, pero sí tenía pequeñas heridas punzantes en el brazo.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9zqWm9lVDG4TJK9WP3Ik0yStONgCpWG8MQ&usqp=CAU",
  },
  {
    question:
      "En la política de la Antigua Roma; ¿quiénes conformaban la población de escasos recursos?",
    answers: ["Los plebeyos", "Los pobres", "Los rurales"],
    correctAnswer: "Los plebeyos",
    text: "El adjetivo «plebeyo» viene del latín ‘plebēius’. En la Antigua Roma se utilizaba el término para indicar que se pertenecía a la plebe.",
    image:
      "https://historiaeweb.com/wp-content/uploads/2019/11/Sacerdotes-flamines-representados-en-el-Ara-Pacis-de-Roma-1.jpg",
  },
  {
    question: "Los textos de autores desconocidos se conocen como…",
    answers: [
      "Textos de autor desconocido",
      "Textos anónimos",
      "Textos sin autor",
    ],
    correctAnswer: "Textos anónimos",
    text: "La palabra anónimo proviene del latín tardío ‘anony̆mus’, y este del griego ‘anṓnymos’.",
    image: "https://thumbs.dreamstime.com/b/blank-book-open-2081114.jpg",
  },
  {
    question: "¿En cuál de estos países el ruso no es la primera lengua?",
    answers: ["Ucrania", "Bielorrusia", "Kazajistán"],
    correctAnswer: "Ucrania",
    text: "El ruso es una lengua cooficial de facto en Ucrania.",
    image:
      "https://cdn.dribbble.com/users/32364/screenshots/3920839/db08_language.gif",
  },
  {
    question:
      "¿Quién se le atribuye esta frase?: “No descansaré hasta romper las cadenas del dominio español en América”.",
    answers: ["Antonio José de Sucre", "Simón Bolívar", "Francisco de Miranda"],
    correctAnswer: "Simón Bolívar",
    text: "La frase “No descansaré hasta romper las cadenas del dominio español en América” es atribuida al libertador de América Simón Bolívar en su juventud.",
    image:
      "https://cdn.dribbble.com/users/60517/screenshots/787426/questions.gif",
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
