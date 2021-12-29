var QUESTIONS = [
    {
        question: "Siéntate __ antes de que te caigas",
        answers: ["ahy", "ahí", "Hay","ay"],
        correctAnswer: "ahí",
        image: "https://gifimage.net/wp-content/uploads/2018/11/gif-sit-1.gif"
    },
    {
        question: "La sequía ha afectado ______ a la parte sur del continente",
        answers: ["sobretodo", "sobre todo"],
        correctAnswer: "sobre todo",
        image: "https://th.bing.com/th/id/R.e40623bafa478c039d48ab1934aea45f?rik=kh%2ffMlaHOI%2btpA&pid=ImgRaw&r=0"
    },
    {
     
        question: "Es una cantante excepcional, creo que _______ mejor en todo el mundo",
        answers: [ "no le hay", "no lo hay", "no la hay"],
        correctAnswer: "no la hay",
        image: "https://c.tenor.com/M2jRS63MhcAAAAAC/adele-hello.gif"
    },
    {
		question: "No entiendo ______ te pones tan pesado algunas veces",
        answers: ["porqué", "por qué", "porque","por que"],
        correctAnswer: "por qué",
        image: "https://c.tenor.com/B4vKlEjr_-AAAAAd/mr-bean-sleepy.gif"
    },
    {	
		question: "Creo que todo gira ________ al color de la vajilla",
        answers: ["entorno","en torno"],
        correctAnswer: "en torno",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/b32d458a-e7ba-4d0e-869b-6d8ff34296c1/a681f570-9b0a-477e-9049-bac3708b2fe9.jpg"
    },
    {
		question: "Hoy no me apetece bañarme ____ tomar el sol",
        answers: ["sino", "si no"],
        correctAnswer: "sino",
        image: "https://c.tenor.com/UqW-583WtbgAAAAM/shower-pool.gif"
    },
    {
		question: "_____ cuando vienes a recoger tu bicicleta",
        answers: ["a ver", "Haber"],
        correctAnswer: "a ver",
        image: "https://2.bp.blogspot.com/-bayW_eI98So/WTBpa3Mj52I/AAAAAAAAEio/vlhEc746HawXVk_jtdGOY8m2JmNs9nM0QCLcB/s640/Carlos%2BVives%252C%2BShakira%2B-%2BLa%2BBicicleta.gif"
    },
    {
		question: "Lo de las islas de plástico en el océano debe ser una leyenda urbana, ____ ya estarían organizando excursiones para verlas",
        answers: ["si no", "sino"],
        correctAnswer: "si no",
        image: "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/b32d458a-e7ba-4d0e-869b-6d8ff34296c1/bcf88fc6-7035-4c32-8f9a-c87c0d33f71a.jpg"
    },
    {
		question: "¡__ mi cabeza! Menudo golpe me he dado",
        answers: ["Ahí", "Ay", "Ahy","Hay"],
        correctAnswer: "Ay",
        image: "https://c.tenor.com/56ocFlKjieoAAAAC/head-migraine.gif"
    },
    {
		question: "Desde luego... ¡______ poca cosa te has enfadado!",
        answers: ["por qué", "porque", "porqué","por que"],
        correctAnswer: "por qué",
        image: "https://i.pinimg.com/originals/be/bf/8b/bebf8bc1566d1b8f29fe6811551595d8.gif"
    },
    {
		question: "Y ese es el ______ de su afición por los peces de colores",
        answers: ["por que", "por qué", "porque","porqué"],
        correctAnswer: "porqué",
        image: "https://i.pinimg.com/originals/76/20/60/7620608082d58b22e387676afe2c730f.gif"
    },
    {
		question: "Aquí mismo __ una señal que lo prohíbe",
        answers: ["ahy", "ahí", "hay","ay"],
        correctAnswer: "hay",
        image: "https://c.tenor.com/d8KlRn-G_VIAAAAC/kitty-stop.gif"
    },  {
		question: "No tengo pensamiento de ir ______ no me han invitado",
        answers: ["porqué", "por que", "porque","por qué"],
        correctAnswer: "porque",
        image: "https://c.tenor.com/k6OQBqI0rNwAAAAd/crying-upset.gif"
    }, 
     {
		question: "Con _____ llegado a tiempo me habría conformado",
        answers: ["haber", "a ver"],
        correctAnswer: "haber",
        image: "https://c.tenor.com/7F8RuUyn_i4AAAAd/be-on-time-dont-be-late.gif"
    },  {
		question: "Me gustaría _____ podido escucharlos en directo",
        answers: ["haber", "a ver"],
        correctAnswer: "haber",
        image: "https://c.tenor.com/xu-i1FdasOQAAAAd/freddie-mercury-live-aid.gif"
    }

];

var correctAnswerElement;
var questionIndex = 0;
var timeLeft = 20;
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
            $("#Titles").css("font-size", "medium");  // Adds hover effect to each answer element
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
                timeLeft = 20;
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
            timeLeft =20;
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