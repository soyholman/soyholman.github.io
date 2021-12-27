var QUESTIONS = [
    {
        question: "¿En qué estilo de natación son excelentes los elefantes?",
        answers: ["Perrito", "Espalda","Brazo","Mariposa"],
        correctAnswer: "Perrito",
        image: "https://i.pinimg.com/originals/89/cb/83/89cb83e28868e0dffb42febab06a8254.gif"
    },
    {
        question: "¿Cuál es la serpiente terrestre más peligrosa del mundo?",
        answers: ["Serpiente de cascabel","Víbora de la muerte","Serpiente taipán","Serpiente tigre"],
        correctAnswer: "Serpiente taipán",
        image: "https://c.tenor.com/0vUFRKWI6swAAAAd/snake.gif"
    },
    {
     
        question: "¿Cuál de estas partes del cuerpo no tienen las hormigas?",
        answers: [ "Cabeza", "Patas","Ojos","Pulmones"],
        correctAnswer: "Pulmones",
        image: "https://i.pinimg.com/originals/fb/41/27/fb4127242130b4dfad12338087e395c0.gif"
    },
    {
		question: "¿Cuál de las siguientes opciones podría causar la muerte de un chimpancé?",
        answers: ["Ceguera", "No comer suficientes Bananas","Depresión","Vivir solos"],
        correctAnswer: "Depresión",
        image: "https://i.pinimg.com/originals/12/9c/22/129c22c53844859a41b330e93ecad7f5.gif"
    },
    {	
		question: "¿Cuál de estos órganos no tienen las jirafas?",
        answers: ["Pulmones", "Cerebro","Estómago","Cuerdas vocales"],
        correctAnswer: "Cuerdas vocales",
        image: "https://c.tenor.com/Phz0b21zsH4AAAAM/giraffe-chew.gif"
    },
    {
		question: "En cuántos grados puede girar su cabeza el búho?",
        answers: ["90°","360°","60°","180°"],
        correctAnswer: "360°",
        image: "https://c.tenor.com/CGRd8uKOM6wAAAAC/buho.gif"
    },
    {
		question: "¿Cuántos metros mide el elefante africano?",
        answers: ["2 metros", "7 metros","4 metros","10 metros"],
        correctAnswer: "4 metros",
        image: "https://i.pinimg.com/originals/ff/5d/92/ff5d921d80a13a59d1ce79cba6b7a669.gif"
    },
    {
		question: "¿Cuánto tiempo duermen las jirafas en un día?",
        answers: ["10 horas", "15 minutos","7 minutos","1/2 hora"],
        correctAnswer: "7 minutos",
        image: "https://img.huffingtonpost.com/asset/5c8ad60320000045046fd6fc.gif?ops=scalefit_630_noupscale"
    },
    {
		question: "¿Cuál es la ballena más grande del mundo?",
        answers: ["Ballena azul", "Ballena blanca","Ballena jorobada","Orca"],
        correctAnswer: "Ballena azul",
        image: "https://c.tenor.com/cXqO1xKU4E4AAAAC/hola-saludo.gif"
    },
 
    {
		question: "¿Cuánto tiempo dura el embarazo de los elefantes?",
        answers: ["10 meses", "9 meses","Desde 18 hasta 22 meses","5 meses"],
        correctAnswer: "Desde 18 hasta 22 meses",
        image: "https://c.tenor.com/V5dgckqpJ3sAAAAC/elefante-llorando.gif"
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
            div.addClass("hover"); // Adds hover effect to each answer element
        });

        return correctAnswer;
    }

    // Function adds click event to each answer element and
    // checks for correct answer. If clicked element has
    // correct answer, text turns green and appends check mark
    // else text turns color gray and appends an X mark
    function checkCorrectAnswer() {

        $("#answers").children().click(function () {

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

                $("#imageTrivia").attr("src", "https://images.angelpub.com/2016/35/39703/wrong.gif");

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

        $("#message").css("display", "block");
        $("#timeLeft").css("display", "none");
        $("#message").text("CORRECTO");

        $("#imageTrivia").attr("src", "https://media1.tenor.com/images/c69fe60c4e179c1cf21726c224353de8/tenor.gif?itemid=11296495");

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
                showCorrectAnswer();
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
            $("#message").text("SE HA TERMINADO EL TIEMPO!");
            $("#timeLeft").css("display", "block");
            $("#timerSeconds").text(timeLeft);
            $("#imageTrivia").attr("src",QUESTIONS[questionIndex].image);
        

        }, 2000);

    }

    // Function starts the game
    // If questionIndex reach QUESTIONS length, game ends and score
    // shows up, otherwise the games keeps running until last question
    function startGame() {

        if (questionIndex <QUESTIONS.length) {

            correctAnswerElement = getTrivia();

            checkCorrectAnswer();

            intervalTimer();

        } else {
            questionIndex = 0;
            $("#card").css("display", "none");
            $("#correct").text("Correcto: " + correct);
            $("#incorrect").text("Incorrecto: " + incorrect);
            $("#score").css("display", "block");
        }

    }

    // Click event button starts game
    $("#button").click(function(){
        correct = 0;
        incorrect = 0;
        questionIndex = 0;
        $("#card").css("display", "flex");
        $("#button").css("display", "none");
        startGame();
    });

    // Click event close score pop-up
    $("#close").click(function(){
        $("#score").css("display", "none");
        $("#button").css("display", "inline-block");
    });

});

    "use strict"
class Circle {
constructor(x,y,r,c,v,e){
this.x=x;
this.y=y;
this.r=r;
this.c=c;
this.v=v;
this.e=e;
this.a=.2;
}
draw(){this.sn+=.3
       this.y-=this.v;
       this.y<this.e?this.a-=.02:'';
       san.beginPath();
       san.arc(this.x,this.y,this.r,0,44/7,false);
       san.fillStyle=`rgb(0,0,240)`;
       san.fill()
       san.closePath();
}
static push(n){var rad=Mnx(1,5),cx=Mnx(rad,W-rad),cy=n?Mnx(H+rad,H+rad+100):Mnx(H*1.2,H*.3),cl=Mnx(100,250),vl=Mnx(.5,2),en=Mnx(H*.8,H*.25);
return new Circle(cx,cy,rad,cl,vl,en)}
}
var Mnx=(n,x)=>{return Math.random()*(x-n)+n},W=window.innerWidth,H=window.innerHeight,san;
var ar=[];
for(var i=0;i<550;i++){
ar.push(Circle.push(false))
}

var draw=()=>{for(var i=0;i<ar.length;i++){
ar[i].draw();if(ar[i].a<0){ar[i]=Circle.push(true)};}}
var init=()=>{
var can=document.querySelector('canvas');
can.width=W;can.height=H;can.style.background='white';can.style.position='fixed';can.style.left=0;can.style.top=0;window.backdropFilter='blur(2px)';san=can.getContext('2d');
var up=()=>{
//san.fillStyle=`rgba(0,0,0,.1)`
san.clearRect(0,0,W,H);
draw();webkitRequestAnimationFrame(up);};
webkitRequestAnimationFrame(up);
};
onload=init;