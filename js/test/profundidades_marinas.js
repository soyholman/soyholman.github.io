var QUESTIONS = [
  {
    question:
      "Para conocer las profundidades de nuestro planeta, debemos empezar delimitando el terreno. ¿Sabes cuál es el punto más profundo de la Tierra?",
    answers: ["Abismo Challenger", "Abismo de Helm", "Fosa de Tonga"],
    correctAnswer: "Abismo Challenger",
    image: "https://c.tenor.com/LAh1rVTcbBMAAAAC/deep-ocean.gif",
    text: "El Abismo Challenger está situado en la fosa de las Marianas y se sumerge hasta los 10.925 metros bajo el nivel del mar. Imaginad que situásemos el Everest justo en este punto, todavía quedarían más de 2 kilómetros de agua por encima para llegar a la superficie. Es el límite más profundo conocido en nuestro planeta y se sitúa en el Océano Pacífico.",
  },
  {
    question:
      "¿Qué es lo más curioso que se ha encontrado en el Abismo Challenger?",
    answers: ["Un barco hundido", "Una trompeta", "Envoltorios de caramelos"],
    correctAnswer: "Envoltorios de caramelos",
    text: "Ni el punto más profundo de la Tierra se libra de los plásticos. Cuando en 2019 la expedición Five Deeps se sumergió hasta los confines del mundo no solo identificaron tres especies animales nuevas para la ciencia, sino que también observaron una bolsa de plástico y restos de envoltorios de caramelos vagando por el fondo marino.",
    image:
      "https://4.bp.blogspot.com/-yMZAwfyEVbg/WOGFegxuOHI/AAAAAAAAAAM/FT_SOUGwcaIJyb12jAVTqeyc4VjpL3zGgCLcB/s1600/fosa-marianas.jpg",
  },
  {
    question:
      "Ahí va un dato: la cordillera más larga del mundo está bajo el mar. ¿Sabrías decirnos cuál es?",
    answers: ["Dorsal mediooceánica", "Espina dorsal", "Dorsal subacuática"],
    correctAnswer: "Dorsal mediooceánica",
    text: "Con cerca de 65.000 kilómetros de longitud, la dorsal mediooceánica se encarga de vertebrar nuestro planeta al unir las placas tectónicas en las profundidades marinas. Una parte de ella, por ejemplo, es la dorsal mesoatlántica. En los rifts de estas dorsales aparece el magma volcánico a través de esas fisuras, que con el paso de millones de años hacen que los océanos se expandan.",

    image:
      "https://www.geoenciclopedia.com/wp-content/uploads/2020/03/dorsal_mesoatlantica.jpg",
  },
  {
    question:
      "Ahora que conocemos cómo están formadas a grandes rasgos las profundidades de nuestro planeta, vamos a entrar en detalles. ¿Sabes qué es la zona crepuscular oceánica?",
    answers: [
      "La más superficial",
      "La zona donde todavía llega la luz",
      "La más profunda",
    ],
    correctAnswer: "La zona donde todavía llega la luz",
    text: "La zona crepuscular, también conocida como zona mesopelágica, se extiende desde los 200 metros de profundidad hasta los 1.000 aproximadamente. Separa las zonas más superficiales de las abisales. Es en esta zona donde se encuentra en torno al 90% de los peces del océano..",
    image:
      "https://www.nationalgeographic.com.es/medio/2021/01/07/_b052459f.jpg",
  },
  {
    question:
      "El pez duende, por ejemplo, tiene una característica que lo hace tremendamente curioso. ¿Sabes de qué estamos hablando?",
    answers: [
      "No tiene ojos",
      "Tiene la cabeza transparente",
      "Es bioluminiscente",
    ],
    correctAnswer: "Tiene la cabeza transparente",
    text: "La cabeza del pez duende está llena de un líquido transparente, aunque el resto del cuerpo es similar a un pez completamente normal. Literalmente, se podría decir que Opisthoproctus soleatus ve a través del cráneo.",
    image:
      "https://www.nationalgeographic.com.es/medio/2021/01/07/_cb309afa.png",
  },
  {
    question:
      "En las profundidades marinas no hay luz, por lo que las especies deben buscar nuevas formas de comunicarse para atraer presas o reproducirse. ¿Sabes cómo se denomina al fenómeno a partir del cual algunas especies emiten luz?",
    answers: ["Iluminación orgánica", "Voltificación", "Bioluminiscencia"],
    correctAnswer: "Bioluminiscencia",
    text: "La bioluminiscencia es tan común en las profundidades marinas que podría ser el lenguaje más utilizado por los seres vivos del planeta. Especies como esta medusa se comunican con su exterior a través de impulsos luminosos que, en mitad de la oscuridad más absoluta, son tremendamente efectivos.",
    image:
      "https://www.nationalgeographic.com.es/medio/2021/01/07/medusa-bioluminiscente_097e8ec9.jpg",
  },
  {
    question:
      "En las profundidades marinas hay seres que pueden llegar a medir más que las ballenas azules. ¡Como lo oyes! ¿Podrías decirnos un ejemplo?",
    answers: ["Sifonóforos", "Calamares de Humboldt", "Cañabotas"],
    correctAnswer: "Sifonóforos",
    text: "Los sifonóforos son un orden de cnidarios que se encargan de formar colonias flotantes con estructuras tremendamente largas. Son capaces de crecer hasta los 45 metros y son prácticamente eternos, pues se clonan rápidamente.",
    image:
      "https://estaticos.muyinteresante.es/uploads/images/pyr/55520750c0ea197b3fd51188/sifonoforo.gif",
  },
  {
    question: "¿Cuál es el nombre de este pulpo?",
    answers: ["Pulpo zanahoria", "Pulpo adorable", "Pulpo de Florida"],
    correctAnswer: "Pulpo adorable",
    text: "Este molusco cefalópodo se hizo famoso al ser propuesto para recibir el nombre científico de Opisthoteuthis adorabilis. Pearl, uno de los personajes de la película Buscando a Nemo, se basó en esta criatura abisal. .",
    image:
      "https://www.nationalgeographic.com.es/medio/2021/01/07/_6b675e3b.jpg",
  },
  {
    question:
      "Esta especie es capaz de soportar la misma presión que 50 aviones jumbo apilados uno encima de otro y habita los barrancos marinos de hasta 5.000 metros de profundidad. ¿Sabes cómo se llama?",
    answers: ["Cerdo de mar", "Oveja de mar", "Vaca de mar"],
    correctAnswer: "Cerdo de mar",
    text: "Se creía que prácticamente ningún ser vivo podría sobrevivir a profundidades tan grandes, pero los cerdos de mar son una de las increíbles especies que llaman hogar a las zonas más profundas del mar. No solo soportan una presión extrema, sino que consiguen sobrevivir con una cantidad de alimento minúscula.",
    image:
      "https://www.nationalgeographic.com.es/medio/2021/01/07/cerdo-de-mar_cc6709c1.jpg",
  },

  {
    question:
      "Más de tres cuartas partes de la actividad volcánica de nuestro planeta sucede en el fondo del mar, cerca de las dorsales oceánicas. ¿Sabrías decirnos cuál es el nombre de la fuente hidrotermal más famosa del mundo?",
    answers: ["Homer Simpson", "Godzilla", "La Ciudad Perdida"],
    correctAnswer: "La Ciudad Perdida",
    text: "No te culpamos si has elegido a Homer o a Godzilla, pues también son otras fumarolas hidrotermales, aunque no tienen la misma fama que La Ciudad Perdida. En esta fuente hidrotermal del Atlántico, con torres de hasta 60 metros de altura, las moléculas se crean espontáneamente. La fascinación por esta fuente hidrotermal es tan grande que algunos científicos están empezando a pensar que la vida en la Tierra se crease a partir de una fuente hidrotermal como esta hace 4.000 millones de años.",
    image:
      "https://www.nationalgeographic.com.es/medio/2021/01/07/la-ciudad-perdida_fd6d8f30.jpg",
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
