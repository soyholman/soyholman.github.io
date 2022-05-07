var QUESTIONS = [
  {
    question: "Una goma de mascar o chicle... ",
    answers: ["5 años", "3 años", "6 meses"],
    correctAnswer: "5 años",
    text: "Un chicle tarda 5 años en desaparecer 5… Por acción del oxígeno se vuelve duro para posteriormente, en varios años desquebrajarse y desaparecer. ",
    image: "https://www.efeverde.com/storage/2019/06/chicles.png",
  },
  {
    question: "Una lata de refresco…",
    answers: ["20 años", "10 años", "50 años"],
    correctAnswer: "10 años",
    text: "Tienen que transcurrir 10 años para que la naturaleza pueda convertir una lata de aluminio en óxido de hierro.",
    image:
      "https://cmsphoto.ww-cdn.com/superstatic/1733913/art/default/46826678-37272525.jpg?v=1591190017",
  },
  {
    question: "Las pilas o baterías… ",
    answers: ["1.000 y 2.000 años", "900 y 1.500 años", "500 y 1.000 años"],
    correctAnswer: "500 y 1.000 años",
    text: "Estos objetos pueden llegar a ser muy contaminantes… El mercurio es el metal más nocivo contenido en las pilas, si una de estas entra en contacto con el agua puede contaminar hasta 600.000 litros del líquido. ",

    image:
      "https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1555359920/jvwibbr0hvfnpuythqjj.jpg",
  },
  {
    question: "El cartón… ",
    answers: ["2 semanas", "5 meses", "1 año"],
    correctAnswer: "1 año",
    text: "Al estar compuesto de celulosa, su tiempo de descomposición es escaso… si se encuentra bajo la lluvia, su biodegradación se acelera.",
    image:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_320,h_240/https://tucarton.com/wp-content/uploads/2020/07/caja-pizza-carton-tucarton.gif",
  },
  {
    question: "Piel de frutas…",
    answers: ["6 semanas", "6 años", "6 meses"],
    correctAnswer: "6 meses",
    text: "Las cáscaras de frutas y también de verduras pueden ser utilizadas para realizar compostaje o compost. ",
    image:
      "https://www.objetivobienestar.com/uploads/s1/86/90/93/las-6-pieles-de-frutas-y-hortalizas-que-no-deberias-tirar.jpeg",
  },
  {
    question: "Un Encendedor… ",
    answers: ["20 años", "70 años", "100 años"],
    correctAnswer: "100 años",
    text: "Los de plástico pueden tardar más de un siglo en desaparecer, además de ser muy contaminantes… Por su parte, los de acero sí tardan 100 años en degradarse.",
    image: "https://c.tenor.com/37TmXl_mVYIAAAAC/zippo-git-em.gif",
  },
  {
    question: "Una botella de plástico… ",
    answers: ["100 años", "1.000 años", "10.000 años"],
    correctAnswer: "1.000 años",
    text: "El plástico, además de ser uno de los materiales más contaminantes, es uno de los que más tarda en degradarse… Las botellas de plástico estando enterradas tardan 1.000 años en descomponerse. ",
    image: "https://cdn.foodandwineespanol.com/2019/10/destacada-agua.jpg",
  },
  {
    question: "Colillas de cigarrillos… ",
    answers: ["2 años", "1 año", "6 años"],
    correctAnswer: "2 años",
    text: "El tabaco tiene unas 4.000 sustancias químicas reconocidas… La combinación de componentes de la colilla hace que su tiempo de degradación sea de 1 año o más.",
    image: "https://www.gifss.com/hogar/cigarrillos/images/cigarro-03.gif",
  },
  {
    question: "Los boletos y billetes… ",
    answers: ["1 año", "3 a 6 meses", "3 a 4 meses"],
    correctAnswer: "3 a 4 meses",
    text: "Al ser los objetos que probablemente se arrojan más al piso, encuentran rápidamente el camino para desaparecer.",
    image:
      "https://www.eleconomista.net/__export/1527107208535/sites/prensagrafica/img/economista/2016/06/23/862cc2f1-34e1-41b1-b961-b23991b80ec4.jpg_423682103.jpg    ",
  },
  {
    question: "Una botella de vidrio… ",
    answers: ["4 años", "400 años", "Más de 1.000 años"],
    correctAnswer: "Más de 1.000 años",
    text: "Aunque con un golpe estos objetos pueden romperse, los pequeños trocitos permanecen en la naturaleza por 4.000 años…",
    image:
      "https://www.spiritshunters.com/wp-content/uploads/2021/04/alcohol_beer_bottle_clean_detail_drink_empty_glass-1159346.gif",
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
